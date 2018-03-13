const chai     = require('chai');
const chaiHttp = require('chai-http');
const myServer   = require('../server/server');

const should = chai.should();

chai.use(chaiHttp); 

describe('Server Scenarios for Get Requests :', () => {
    it('http://localhost:8080/ must return an object with an specific message.', (done) => {
        chai.request(myServer)
        .get('/')
        .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
                res.body.should.include({msg : 'This is a response of the / path'});
            done();
        });
    });

    it('http://localhost:8080/pages/page2 must return an html object.', (done) => {
        chai.request(myServer)
        .get('/pages/page2')
        .end((err, res) => {
                res.should.have.status(200);
                res.should.be.an('object');
            done();
        });
    });
});

describe('Server Scenarios for Post Requests :', (done) => {
    let validCredentials = {
        user : 'MW',
        pass : 'mijaelWatts'
    };

    let invalidCredentials = {
        user : 'VV',
        pass : 'victorVolts'
    };

    it('validate correct credentials.', (done) => {
        chai.request(myServer)
        .post('/spike/login')
        .send(validCredentials)
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.an('object');
            res.body.should.include({msg : 'access granted.'});

            done();          
        });
    });

    it('validate incorrect credentials.', (done) => {
        chai.request(myServer)
        .post('/spike/login')
        .send(invalidCredentials)
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.an('object');
            res.body.should.include({msg : 'access not granted.'});   

            done();         
        });
    });
});