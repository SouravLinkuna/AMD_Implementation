define("AMDSchemae08855d8Page", [], function() {
	return {
		entitySchemaName: "AMDProductDetail",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDDescription": {
				"53a10170-9bfd-4077-af49-bda4565aeb82": {
					"uId": "53a10170-9bfd-4077-af49-bda4565aeb82",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDProductIDColumn",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDProductIDColumn"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae8c187e-30a2-40de-af2f-b04f21ac16cd",
								"dataValueType": 10
							}
						}
					]
				},
				"84516812-d9b6-4a6b-be7c-90161d3cfd2a": {
					"uId": "84516812-d9b6-4a6b-be7c-90161d3cfd2a",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDProductIDColumn",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDProductIDColumn"
							},
							"rightExpression": {
								"type": 0,
								"value": "8afacb11-cfad-44ca-abae-ab92a9b0ec63",
								"dataValueType": 10
							}
						}
					]
				},
				"117f1ffb-265f-4b46-818d-5fb9b3096e22": {
					"uId": "117f1ffb-265f-4b46-818d-5fb9b3096e22",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDProductIDColumn",
							"attributePath": "Description"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDProductIDColumn"
							},
							"rightExpression": {
								"type": 0,
								"value": "858999dc-d2ee-4f81-8ec0-0e6865d5aa78",
								"dataValueType": 10
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
				"name": "LOOKUP91bb5ccc-10fc-4afe-8eae-dfd728759a34",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDProductIDColumn",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER66f1493f-e0db-40b3-bfc7-b5054c25f096",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDPercentageAllocation",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP64005c4d-128c-47bc-8cda-78f43a0a00ce",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDProductType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPc2695a32-0ef3-4702-938e-292df279a4e2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDUnit",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING4ac6c3a4-24e7-4f58-a318-8180197a4992",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
