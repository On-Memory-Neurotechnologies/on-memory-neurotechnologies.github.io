const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://default-user:JgMmIChJd7IoyOJY@cluster0.bdgxr.mongodb.net/on-memory-neurotechnologies?retryWrites=true&w=majority");

const Schema = mongoose.Schema;
const readerSchema = new Schema({
    reader: String,
    who: String,
    question1: String,
    question2: String,
    consent: String
});

const Reader = mongoose.model("Reader", readerSchema);

Reader.find(function(err, readers) {
    if(err) {
        console.log(err);
    }
    else {
        onsole.log(readers);
    }
    });
