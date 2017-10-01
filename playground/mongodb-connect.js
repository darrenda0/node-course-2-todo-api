
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connnected to MongoDB server');

    // add data to the TodoApp collection
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    //  }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // // Insert new doc into Users (name, age, location)
    // db.collection('User').insertOne({
    //     name: 'Andrew',
    //     age: 19,
    //     location: 'San Luis Obispo'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    // close database connection
    db.close();
});