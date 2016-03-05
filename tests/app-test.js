var assert = require("assert");

describe("the app likes pizza", function() {
	it("should run a test", function() {
    require("../app/js/app");
    var $ = require("jQuery");
    assert.equal($('body').text(), "I like pizza.");
	});
});
