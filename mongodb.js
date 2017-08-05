const MongoDB = require('mongodb')
let MongoClient = MongoDB.MongoClient;

let url = "mongodb://localhost:27017/robotInfo"

MongoClient.connect(url, function(error, db){
  if (error){
    console.log(error);
  }
  else{
    console.log("Connected Baby!")
  }
  db.collection("users").find({})

let query = {}
db.collection("users").find(query).toArray(function(
  error, userDocuments){
    if (error){
      console.log("rotton dog error");
    }
      else {
        console.log(userDocuments);
      }
    });

db.close();
});
