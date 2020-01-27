sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/I18NText",
  "sap/ui/test/actions/Press",
  "sap/ui/test/matchers/PropertyStrictEquals",
				"sap/ui/test/matchers/Ancestor"
], function (Opa5, I18NText, Press, PropertyStrictEquals, Ancestor) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				changeTheTextOfTheButton: function(){
					
					return this.waitFor({
						id: "someButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "did not find the button"
					
					});
				}
			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The View1 view is displayed");
						},
						errorMessage: "Did not find the View1 view"
					});
				},
				iShouldSeeTheButton: function (){
					return this.waitFor({
						id: "someButton",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The button is displayed");
							},
							errorMessage: "Did not find the button in the view"
					});
				},
				iShouldSeeTheText: function (){
					return this.waitFor({
						id: "someText",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The Text is displayed");
							},
							errorMessage: "Did not find the text in the view"
					});
				},
				iShouldSeeTheSecondText: function(){
					return this.waitFor({
						controlType: "sap.m.Text",
						viewName: sViewName,
						matchers: new I18NText({
							propertyName: "text",
							key: "anotherText"
						}),
						success: function () {
							Opa5.assert.ok(true, "The second Text is displayed");
							},
							errorMessage: "Did not find the matcher to the second text in the view"
					});
				},
				iShouldSeeTheSecondButtonText: function(){
					return this.waitFor({
						id: "someButton",
						viewName: sViewName,
						matchers: new PropertyStrictEquals({
							propertyName: "text",
							key: "asdfklj"
						}),
						success: function () {
							Opa5.assert.ok(true, "The button changed its text");
							},
							errorMessage: "The button did not change its text"
					});
				},
				iShouldSeeThreeInputFields: function(){
					return this.waitFor({
						controlType: "sap.m.Input",
						viewName: sViewName,
						matchers: new PropertyStrictEquals({
							name: "value",
							value: "a"
						}),
						success: function(aInputFields){
							//Opa5.assert.strictEqual(condition1, condition2, "comment") -> condition1 === condition2
							Opa5.assert.strictEqual(aInputFields.length, 3, "there were two Input fields");
							Opa5.assert.strictEqual(aInputFields[1].getValue(), "a", "the value of the secound input field was a");
						},
						errorMessage: "No Input field found"
					});
				},
				iShouldSeeThreeInputFieldsInsideTheVBox: function(){
					return this.waitFor({
						controlType: "sap.m.VBox",
						viewName: sViewName,
						matchers: new PropertyStrictEquals({
							name: "renderType",
							value: "Bare"
						}),
						success: function(aControls){
							var oVBox = aControls[0];
							this.waitFor({
								controlType: "sap.m.Input",
								matchers: new Ancestor(oVBox),
								success: function(aInputs){
									Opa5.assert.ok(true, "found " +aInputs.length + " Input fields in the vbox");
								},
								errorMessage: "did not found any input fields in the vbox"
							});
						},
						errorMessage: "did not found the vbox"
					});
				}
				
			}
		}
	});

});