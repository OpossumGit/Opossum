var request = require('supertest'); 
//var assert = require('chai').assert;
var chai = require('chai');
var chaiSubset = require('chai-subset');
chai.use(chaiSubset);
var expect = chai.expect;

var app = require('../app');

describe('Landing page', function() {
	describe('Get response', function() {
		it('should not return error', function(done){ 
			request(app).get('/')
			.expect(200,done);
		});
	});
});