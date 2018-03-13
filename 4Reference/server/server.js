const express    = require('express');
const url        = require('url');
const bodyParser = require('body-parser');
const admin      = require('firebase-admin');

const app = express();

const Logger    = require('./logger');
const Constants = require('./constants');
const ServiceAccount = require('./firebase-key');

// admin.initializeApp({
//     credential  : admin.credential.cert(ServiceAccount),
//     databaseURL : ""
// });

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({type : 'application/json'}));

app.get('/', (req, res) => res.json({msg : 'This is a response of the / path'}));

app.get('/pages/page1', (req, res) => {
    Logger.loggerEmit(Constants.INFO, 'Get request for page1', true);

    res.locals = {
        name : 'Mijael Watts',
        msg  : 'you have logged in succesfully'
    };
    
    res.render('index.ejs', (err, success) => {
        if (err) {
            Logger.loggerEmit(Constants.ERROR, err, true);
        }
        else if (success) {
            res.write(success);
        }
    });
});

app.get('/pages/page2', (req, res, next) => {
    Logger.loggerEmit(Constants.INFO, 'Get request for page2', true);

    // let pageRequested = req.params.page;
    
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/spike/login', (req, res) => {

    // admin.auth().getUser(uid).then(function(userRecord) {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log("Successfully fetched user data:", userRecord.toJSON());
    // })
    // .catch(function(error) {
    //     console.log("Error fetching user data:", error);
    // });

    let user = req.body.user === 'MW' ? true : false;
    let pass = req.body.pass === 'mijaelWatts' ? true : false;

    if (user && pass) {
        res.json({msg : 'access granted.'});
    } else {
        res.json({msg : 'access not granted.'});
    }
});

app.listen(8080, () => {
    Logger.loggerEmit(Constants.INFO, 'Express running on port 8080 in ' + app.get('env') + ' environment.', true);
});

module.exports = app;