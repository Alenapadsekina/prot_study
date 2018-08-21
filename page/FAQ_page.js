//TEST 1

var checkHeader = function() {
	this.learnSection = function(value) {
		browser.get(value);
	};
	this.getHeader = function(id, headerName) {
		
		var header = element(by.id(id));
		expect(header.getText()).toBe(headerName);
	};
	
};
module.exports = new checkHeader();
