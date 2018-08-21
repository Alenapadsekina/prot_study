//TEST 1

var search = function() {
	//browser.get("https://angularjs.org/");

	this.enterFieldValue = function(project) {
		element(by.model('projectList.search')).sendKeys(project);
	};

	this.getSearchResult = function(value) {
		element(by.linkText(value)).click();;
	};

	this.expectedUrl = function(value){
		return browser.getCurrentUrl().then(function(url) {
				return url === value;
				});
			};
	


};
module.exports = new search();
/*

*/

// TEST 2 

var editPage = function() {
	//browser.get("https://angularjs.org/");
	this.clickEditButton = function(value) {
		element.all(by.cssContainingText(".btn", " Edit Me")).get(value).click();
	};
	this.editUrl = function(value) {
		return browser.getCurrentUrl().then(function(url) {
			return url === value;
			});
		};

};
module.exports = new editPage();

// TEST 3

var myNewTask = function() {
	
	this.addNewTask = function(task) {
		element(by.model('todoList.todoText')).sendKeys(task);
		element(by.css('[type="submit"]')).click();
	}
	this.expectedTask = function(value) {
		let newTask = element.all(by.css('[class="checkbox"]')).last();
		expect(newTask.getText()).toBe(value);
	}
};
module.exports = new myNewTask();
