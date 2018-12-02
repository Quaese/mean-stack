import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// config
import config from './config/config';

// Issue = mongoose Schema
import Issue from './models/Issue';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// mongodb wrapper
mongoose.connect('mongodb://localhost:27017/Issues');                                                                  // localhost
// mongoose.connect(`mongodb://${config.mongodb.user}:${config.mongodb.pw}@localhost:30759/Issues?authSource=admin`);  // uberspace

// establish database connection
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection estabilshed successfully');
});

// START: Routes
// all issues
router.route('/issues').get((req, res) => {
    // find all issues
    Issue.find((err, issues) => {
        if (err) {
            console.log(err);
        } else {
            // respond with json object containing all issues
            res.json(issues);
        }
    })
});

// issue by id
router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issue);
        }
    })
});

// add new issue
router.route('/issues/add').post((req, res) => {
    // create new Issue Schema for mongoose
    let issue = new Issue(req.body);

    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new issue');
        })
});

// update issue
router.route('/issues/update/:id').post((req, res) => {
    // get issue by id
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue) { // no issue found
            return next(new Error('Could not load Document'));
        } else {
            // issue found => update with data from body
            issue.title = req.body.title;
            issue.resposible = req.body.resposible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
        }

        // execute save method from mongoose to save changes in database
        issue.save()
            .then(issue => {
                res.json('Update done');
            })
            .catch(err => {
                res.status(400).send('Update failed');
            });
    });
});

// delete issue
router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Removed successfully');
        }
    });
});
// END:   Routes

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
