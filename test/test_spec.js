describe ("Home page", () => {

	beforeEach(function() {
		browser.get("https://angularjs.org/");
	});


	//Test 1
	var myNewTask = require("../page/home_page.js");
	it("an element is added into toDo list", async () => {
		myNewTask.addNewTask("check something");
		myNewTask.expectedTask('check something');

	});

	//Test 2
	var checkHeader = require("../page/FAQ_page.js");
	it("check the header", async () => {
		checkHeader.learnSection("https://docs.angularjs.org/misc/faq");
		checkHeader.getHeader('faq', 'FAQ');

	});

});
