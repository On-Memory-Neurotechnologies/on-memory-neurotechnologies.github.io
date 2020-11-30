/*
let dbName = "on-memory-neurotechnologies"
let collectionName = "readers"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var test = {userID: "abc"};
    var newTest = { userID: "def" };
    db.collection("readers").updateOne(test, newTest, function(err, res) {
      if (err) throw err;
      console.log("Document updated");
    });
  }); 

*/