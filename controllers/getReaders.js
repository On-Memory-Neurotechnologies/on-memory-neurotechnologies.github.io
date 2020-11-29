const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://default-user:JgMmIChJd7IoyOJY@cluster0.bdgxr.mongodb.net/on-memory-neurotechnologies?retryWrites=true&w=majority");

const Schema = mongoose.Schema;
const readerSchema = new Schema({
    userID: String,
    age: Number,
    hasAlzheimers: Boolean,

    v1Q1: String,
    v1Q2: String,
    v1Q3: String,
    v1Q4: Number,
    v1Q5: String,
    v2Q1: String,
    v2Q2: String,
    v3Q1: String,
    v3Q2: String,
    v3Q3: String,
    v4Q1: String,
    v4Q1Desc: String,
    v4Q2: String,
    v4Q2Desc: String,
    v4Q3Pros: String,
    v4Q3Cons: String,
    v4Q5: String,
    v5Q1: String,
    v5Q2: String,
    v6Q1: String,
    v6Q2: String,
});

const Reader = mongoose.model("Reader", readerSchema);

Reader.find(function(err, readers) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(readers);
    }
    });
