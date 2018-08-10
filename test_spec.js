describe ("Home page", () => {

// TEST 1

	it("Search result contains a link", async () => {
		await browser.get("https://angularjs.org/");
		await element(by.model('projectList.search')).sendKeys('react');
		await element(by.linkText('React')).click();
		var reactUrl = function() {
			return browser.getCurrentUrl().then(function(url) {
				return url === 'https://reactjs.org/';
				});
			};
		
	});

// TEST 2 (done!)
	it("Clicking Edit me button redirects to plnkr page", async () => {
		await browser.get("https://angularjs.org/");
		await element.all(by.cssContainingText(".btn", " Edit Me")).get(2).click(); 
		var editUrl = function() {
			return browser.getCurrentUrl().then(function(url) {
				return url === 'https://next.plnkr.co/edit/?p=preview&preview/';
				});
			};

	});

// TEST 3 (done!)
	it("an element is added into toDo list", async () => {
	
	await browser.get("https://angularjs.org/");
	await element(by.model('todoList.todoText')).sendKeys('new task');
	await element(by.css('[type="submit"]')).click();
	let newTask = element.all(by.css('[class="checkbox"]')).last();
	expect(newTask.getText()).toBe('new task');
		
	});
	

//TEST 4 (done!)
	it("check that FAQ in Learn dropdown is a link and leads to FAQ page", async () => {
	
	await browser.get("https://angularjs.org/");

	await element(by.cssContainingText(".dropdown", "Learn")).click();
	const FAQ = element(by.linkText('FAQ'));
	expect(FAQ.getTagName()).toBe('a');
	FAQ.click();
	
	var faqUrl = function() {
		return browser.getCurrentUrl().then(function(url) {
			return url === 'https://docs.angularjs.org/misc/faq';
			});
		};
	});





});