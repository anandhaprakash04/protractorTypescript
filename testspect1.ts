
import {browser} from "protractor";
import {element,by} from "protractor";

describe("Protractor chain locators", function() {
	it("TestCase01", function() {
        browser.get("http://juliemr.github.io/protractor-demo/");
		// Repeater, chain locators and css for identical tags

		const first = element(by.model("first"));
		const second = element(by.model("second"));
		const operator = element(by.model("operator"));
		const button = element(by.tagName("button"));
		
		function performAction(a,b,c){
		first.sendKeys(a);
		second.sendKeys(b);
		operator.element(by.xpath("//option[text()='" + c + "']")).click();
		button.click();
		}
		performAction(100, 500,"+");
		const resultsTable = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
		resultsTable.getText().then(function(text) {
			console.log(" The RESULT from the table is " + text);
		})
		performAction(100, 500,"*");
		resultsTable.getText().then(function(text) {
			console.log(" The RESULT from the table is " + text);
		})
	});
});