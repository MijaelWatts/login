// const SINON = require('sinon');
// const CHAI  = require('chai');

// beforeEach(() => {
//     this.sandbox = SINON.sandbox.create();
// });

// afterEach(() => {
//     this.sandbox.restore();
// });

// -------------------

// const ASSERT  = require('assert');
// const REQUEST = require('request');
// const EXPECT  = require('chai').expect;
// const WEB_PAGE = require('../server/fileToTest');

// const SERVER = require('../server/server');
// const FS     = require('fs');

// describe('Logger', () => {
//     describe('Errors', () => {
//         it('should create a new log.txt file with a new message in it.', () => {
//             LOGGER.createLogFile('MsgForTesting');
//         });
//     });
// });

// describe('Color Code Converter', () => {
//     describe('RGB to Hex conversion', () => {
//         const URL = 'http://localhost:8080/';

//         it('returns status 200', (done) => {
//             REQUEST(URL, (error, response, body) => {
//                 EXPECT(response.statusCode).to.equal(200);
//                 done();
//             });
//         });

//         // it('converts the basic colors', () => {
//         //     let redHex = SERVER.rgbToHex(255, 0, 0);

//         //     EXPECT(redHex).to.equal("ff0000");
//         // });
//     });
// });

// describe('Log File', () => {
//     describe('Creation', () => {
//         it('should create correctly a file', () => {
//             let response = SERVER.testFunction();

//             ASSERT.equal(response, 'Hello');
//         });
//     });
// });

// describe('Array', () => {
//     describe('#indexOf()', () => {
//         it('should return -1 when the value is not present', () => {
//             ASSERT.equal(-1, [1,2,3].indexOf(4));
//         });
//     });
// });

// describe('The webpage module', function () {  
//   it('saves the content', function * () {
//     const url = 'google.com'
//     const content = '<h1>title</h1>'
//     const writeFileStub = this.sandbox.stub(FS, 'writeFile', function (filePath, fileContent, cb) {
//       cb(null)
//     })

//     const requestStub = this.sandbox.stub(REQUEST, 'get', function (url, cb) {
//       cb(null, null, content)
//     })

//     const result = yield WEB_PAGE.saveWebpage(url)

//     EXPECT(writeFileStub).to.be.calledWith()
//     EXPECT(requestStub).to.be.calledWith(url)
//     EXPECT(result).to.eql('page')
//   })
// })