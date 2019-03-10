"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe("Protractor chain locators", function () {
    it("TestCase01", function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        // Repeater, chain locators and css for identical tags
        const first = protractor_2.element(protractor_2.by.model("first"));
        const second = protractor_2.element(protractor_2.by.model("second"));
        const operator = protractor_2.element(protractor_2.by.model("operator"));
        const button = protractor_2.element(protractor_2.by.tagName("button"));
        function performAction(a, b, c) {
            first.sendKeys(a);
            second.sendKeys(b);
            operator.element(protractor_2.by.xpath("//option[text()='" + c + "']")).click();
            button.click();
        }
        performAction(100, 500, "+");
        const resultsTable = protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(3)"));
        resultsTable.getText().then(function (text) {
            console.log(" The RESULT from the table is " + text);
        });
        performAction(100, 500, "*");
        resultsTable.getText().then(function (text) {
            console.log(" The RESULT from the table is " + text);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWN0MS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RzcGVjdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBbUM7QUFDbkMsMkNBQXNDO0FBRXRDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNyQyxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ1Ysb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxzREFBc0Q7UUFFdEQsTUFBTSxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFN0MsU0FBUyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1lBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUNELGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUE7UUFDRixhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9