const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true},(err,db)=> {
    if(err){
      return console.log('Unable to connect');
    }
      console.log('connected');
      var db = client.db('TodoApp');
      db.collection('Todos').insertOne({
          text:'Something to do',
          completed: false

      },(err,result) =>{
          if(err){
              return console.log('Unable to connect',err);
          }
           console.log(JSON.stringify(result.ops,undefined,2));
      });

    db.close();
})