const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    projectDetails: { type: String, required: true },
});
const messageModel = mongoose.model( 'Messages',messageSchema );
module.exports =messageModel;