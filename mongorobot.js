const MongoDB = require('mongodb')
let MongoClient = MongoDB.MongoClient;

let url = "mongodb://localhost:27017/robotInfo"
let dbConn = null;

MongoClient.connect(url, function(error, db){
  if (error){
    console.log(error);
  }
  else{
    console.log("Connected Baby!")
    dbConn =db;

  })
  dbConn.collection("users").find().toArray(function(error,users){
    if (error){
      console.log("Errors, users can't be found")
    }

    else{
      let model = {
        appType: "Robot LinkedIn for Robots",
        users:users
      }
    res.render("index", model)
    }
  });
  app.listen(3000, function(){
    console.log("App running on port 3000")
  })
})
