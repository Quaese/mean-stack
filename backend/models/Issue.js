import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create new mongoose Schema
let Issue = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status:{
        type: String,
        default: 'Open'
    }
});

// export mongoose model
export default mongoose.model('Issue', Issue);