var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHTTP);

var app = require('../app');

describe('Landing page', function() {
	it('should get response', function(done) {
		chai.request(app)
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			done();
		})
	});

});