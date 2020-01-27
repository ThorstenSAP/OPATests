	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/View1"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			//Actions
			When.onTheAppPage.changeTheTextOfTheButton();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();
			Then.onTheAppPage.iShouldSeeTheButton();
			Then.onTheAppPage.iShouldSeeTheText();
			Then.onTheAppPage.iShouldSeeTheSecondText();
			Then.onTheAppPage.iShouldSeeThreeInputFields();
			Then.onTheAppPage.iShouldSeeThreeInputFieldsInsideTheVBox();

			//Cleanup
			Then.iTeardownMyApp();
		});
	});