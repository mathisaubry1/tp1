const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Listening function
function insertIn(db)
{
    const app = require('express')();
    const bodyparser = require('body-parser');

    app.use(bodyparser.json());
    app.get('/', (req, res) =>
    {
        myCursor = db.collection('users').find();

        myCursor.toArray((err, result) =>
        {
            if (err)
             {
                 console.error(err);
             }
             res.send(result);
        });
    });
   
    // /user

    app.get('/user', (req, res) =>
    {
        myCursor = db.collection('users').find();

        myCursor.toArray((err, result) =>
        {
            if (err)
             {
                 console.error(err);
             }
             res.send(result);
        });
    });
    app.put('/user', (req, res) =>
    {
        db.collection('users').insert(req.body)
        .then(result => {
            console.log(result);
            res.send('Add a user');
        })
        .catch(error => console.error(error))
    });
    app.delete('/user', (req, res) =>
    {
        db.collection('users').deleteOne({ _id: ObjectID(req.body._id) });
        res.send('Deleted user with id : ' + req.body._id);
    });
    app.post('/user', (req, res) =>
    {
        id = req.body._id;
        myObj = req.body;
        delete myObj._id;
        db.collection('users').updateOne({ _id: ObjectID(id) }, { $set: myObj }, (err, res) =>
        {
            if (err)
            {
                console.error(err);
            }
            console.log(res);
        });
        res.send('Updated user with id : ' + id);
    });

    // /items

    app.get('/items', (req, res) =>
    {
        myCursor = db.collection('items').find();

        myCursor.toArray((err, result) =>
        {
            if (err)
             {
                 console.error(err);
             }
             res.send(result);
        });
    });
    app.put('/items', (req, res) =>
    {
        db.collection('items').insert(req.body)
        .then(result => {
            console.log(result);
            res.send('Add a item');
        })
        .catch(error => console.error(error))
    });
    app.delete('/items', (req, res) =>
    {
        db.collection('items').deleteOne({ _id: ObjectID(req.body._id) });
        res.send('Deleted item with id : ' + req.body._id);
    });
    app.post('/items', (req, res) =>
    {
        id = req.body._id;
        myObj = req.body;
        delete myObj._id;
        db.collection('items').updateOne({ _id: ObjectID(id) }, { $set: myObj }, (err, res) =>
        {
            if (err)
            {
                console.error(err);
            }
            console.log(res);
        });
        res.send('Updated item with id : ' + id);
    });

    // /list

    app.get('/list', (req, res) =>
    {
        myCursor = db.collection('lists').find();

        myCursor.toArray((err, result) =>
        {
            if (err)
             {
                 console.error(err);
             }
             res.send(result);
        });
    });
    app.put('/list', (req, res) =>
    {
        db.collection('lists').insert(req.body)
        .then(result => {
            console.log(result);
            res.send('Add a list');
        })
        .catch(error => console.error(error))
    });
    app.delete('/list', (req, res) =>
    {
        db.collection('lists').deleteOne({ _id: ObjectID(req.body._id) });
        res.send('Deleted list with id : ' + req.body._id);
    });
    app.post('/list', (req, res) =>
    {
        id = req.body._id;
        myObj = req.body;
        delete myObj._id;
        db.collection('lists').updateOne({ _id: ObjectID(id) }, { $set: myObj }, (err, res) =>
        {
            if (err)
            {
                console.error(err);
            }
            console.log(res);
        });
        res.send('Updated list with id : ' + id);
    });

    app.listen(9999, () =>
    {
        console.log('App listening on port 9999');
    });
}

// Use connect method to connect to the Server
client.connect()
    .then(connectedClient =>
        {
        const db = client.db(dbName);
        insertIn(db);
        console.log("Connected successfully to server");   
    })
    .catch(err =>
        {
        console.error("Failed to connect to server");
    });  