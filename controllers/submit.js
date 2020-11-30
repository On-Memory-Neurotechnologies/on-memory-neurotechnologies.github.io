const { format } = require("morgan")

let dbName = "on-memory-neurotechnologies"
let collectionName = "readers"

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

const Model = mongoose.model('Reader', readerSchema);
await Model.findById('5fc42e98b377570034760b74');

const submitAllFeedback = async (req, res) => {
  
  try {
    await req.app.get('mongo_client').db(dbName).collection(collectionName).insertOne(req.body)
    return res.send(`Submission has been received.`);
  } catch (error) {
    console.log('error');
    console.log(error);
  }
};

// * NOT USED CURRENTLY *
const updateFeedback = async (req, res) => {
  try {
    await req.app.get('mongo-client').db(dbName).collection(collectionName).findByIdAndUpdate({"5fc42e98b377570034760b74"},{userID: 'test'},function(err,res) {
      if(err) {
        res.send(err);
      }
      else {
        res.send(res);
      }
    });
    return res.send('Submission updated.');
  } 
  catch (error) {
    console.log('error');
    console.log(error);
  }
}
module.exports = {
  submitAllFeedback: submitAllFeedback,
  updateFeedback: updateFeedback
}; 
