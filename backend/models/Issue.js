import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

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
    serverity: {
        type: String
    },
    status:{
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue', Issue);