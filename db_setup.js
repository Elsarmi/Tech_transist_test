const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/transit_courses";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("courses");
    var myobj = [
      { course_name: 'John', stars: '1'},
      { course_name: 'Peter', stars: '4'},
      { course_name: 'Chuck', stars: '1'},
      { course_name: 'Viola', stars: '3'}
    ];
    dbo.collection("courses").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
