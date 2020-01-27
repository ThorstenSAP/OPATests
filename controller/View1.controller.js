sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("OPATest.OPATest.controller.View1", {
		onInit: function () {
			var sampleData = new JSONModel({
				"test": "test",
				"users": [{
					"id": 0,
					"name": "Heinz Heinrich"
				}, {
					"id": 1,
					"name": "Margret Müller"
				}, {
					"id": 2,
					"name": "Sabine Schmidt"
				}],
				"nummernkreis": [{
					"id": 122110,
					"value": "ABC /XYZ"
				}, {
					"id": 122111,
					"value": "DEF /LKJ"
				}, {
					"id": 122112,
					"value": "MNB /RTZ"
				}],
				"datensatzverantwortung": [{
					"id": 0,
					"value": "Office Org ID"
				}, {
					"id": 1,
					"value": "BackOffice ID"
				}, {
					"id": 2,
					"value": "Management ID"
				}],
				"keys": [{
					"id": 1,
					"key": "blub"
				}, {
					"id": 2,
					"key": "blubblub"
				}]
			});
			this.getView().setModel(sampleData, "sampleData");
			this.getView().bindElement({
				path: "/keys",
				model: "sampleData"
			});
		},
		changeText: function(oEvent){
			this.getView().byId("someButton").setText("asdfklj");
		},
		addInput: function (oEvent){
			//do something
		},
		deleteInput: function(oEvent){
			//do something
		}
	});
});