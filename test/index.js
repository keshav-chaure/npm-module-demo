var should = require('chai').should(),
    greet = require('../index'),
    getGreeting = greet.getGreeting;

describe('#getGreeting', function() {
  it('converts & into &amp;', function() {
    getGreeting('keshav').should.equal('Hello-keshav');
  });
});
