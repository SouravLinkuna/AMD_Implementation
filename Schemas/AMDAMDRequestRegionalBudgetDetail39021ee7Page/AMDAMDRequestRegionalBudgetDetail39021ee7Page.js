define("AMDAMDRequestRegionalBudgetDetail39021ee7Page", [], function() {
	return {
		entitySchemaName: "AMDRequestRegionalBudgetDetail",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDTransferAmount": {
				"ccf5d97d-d060-466e-a88f-a823da1fc9ed": {
					"uId": "ccf5d97d-d060-466e-a88f-a823da1fc9ed",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDRequest",
								"attributePath": "AMDTransferType"
							},
							"rightExpression": {
								"type": 0,
								"value": "3cc98b1d-e6b1-4a0f-ac4f-104da236745d",
								"dataValueType": 10
							}
						}
					]
				},
				"8eedc76d-ac83-41d6-bf3b-c4b671fb2247": {
					"uId": "8eedc76d-ac83-41d6-bf3b-c4b671fb2247",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDPosting",
							"attributePath": "AMDTransferAmount"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDPosting"
							}
						}
					]
				},
				"d1d58aa0-56e9-47a3-88c2-e58b643ed033": {
					"uId": "d1d58aa0-56e9-47a3-88c2-e58b643ed033",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDRequest",
							"attributePath": "AMDTransferAmount"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDRequest",
								"attributePath": "AMDType"
							},
							"rightExpression": {
								"type": 0,
								"value": "f1ad6560-4634-4470-9bf8-10c55115e8e0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDInitialAmount": {
				"e07ee91b-30ef-4e2f-a3c7-7eed13660ee5": {
					"uId": "e07ee91b-30ef-4e2f-a3c7-7eed13660ee5",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDRegionalBudget",
							"attributePath": "AMDTotalAllocatedBudget"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDRegionalBudget"
							}
						}
					]
				},
				"28e018ff-c2f5-4da0-985a-59960e84e119": {
					"uId": "28e018ff-c2f5-4da0-985a-59960e84e119",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSubRegionalDistribution",
							"attributePath": "AMDTotalAllocatedBudget"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSubRegionalDistribution"
							}
						}
					]
				}
			},
			"AMDSubRegionalDistribution": {
				"20b6b2cf-fe0c-4b79-a58a-f504b266e886": {
					"uId": "20b6b2cf-fe0c-4b79-a58a-f504b266e886",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "AMDRegionalBudget",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 1,
					"attribute": "AMDRequest",
					"attributePath": "AMDSourceRegionalBudget"
				}
			},
			"AMDAccountingClassification": {
				"b959d19f-9178-4942-90ce-ea369c93c37e": {
					"uId": "b959d19f-9178-4942-90ce-ea369c93c37e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDRegionalBudget",
							"attributePath": "AMDAccountingClassification"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDRegionalBudget"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDRequest6d2d3608-0dd6-465b-9e50-bba5d2993870",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDRequest"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER13d5c4e5-fa4f-4ba3-83b1-d538b41f3c32",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDTransferAmount",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP13567fd1-d491-4e0d-8001-790482ff03ad",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDRegionalBudget",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP06c6619f-f0c4-4e2a-9c36-c20c0b1f612b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDAccountingClassification",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
