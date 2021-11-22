define("AMDOrganizationData1Page", [], function() {
	return {
		entitySchemaName: "AMDOrganizationData",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDOrganizationDataFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDOrganizationData"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDSalesOrganization": {
				"5249a0b0-81aa-4de8-80e3-de5ad44fe5ed": {
					"uId": "5249a0b0-81aa-4de8-80e3-de5ad44fe5ed",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "2b39f78b-d1ce-4c47-8ff9-9d4b73de2999",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDDistributionChannel": {
				"e393b29f-e3fb-47f6-8e5e-4388efae239d": {
					"uId": "e393b29f-e3fb-47f6-8e5e-4388efae239d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "2b39f78b-d1ce-4c47-8ff9-9d4b73de2999",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDDivision": {
				"7c6d2d85-274b-4eea-bf66-cb83755b10cc": {
					"uId": "7c6d2d85-274b-4eea-bf66-cb83755b10cc",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "2b39f78b-d1ce-4c47-8ff9-9d4b73de2999",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDSalesOffice": {
				"84d1df4d-c4a4-477d-b2b7-d518f766ef15": {
					"uId": "84d1df4d-c4a4-477d-b2b7-d518f766ef15",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "2b39f78b-d1ce-4c47-8ff9-9d4b73de2999",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDSalesGroup": {
				"cd7febe1-35b9-480d-bc4d-800ebdc07e04": {
					"uId": "cd7febe1-35b9-480d-bc4d-800ebdc07e04",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "2b39f78b-d1ce-4c47-8ff9-9d4b73de2999",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDServiceOrganization": {
				"565968b7-201e-4f79-b182-566c5ba43b36": {
					"uId": "565968b7-201e-4f79-b182-566c5ba43b36",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDOrganizationalDataType"
							},
							"rightExpression": {
								"type": 0,
								"value": "d9101eb4-0c14-4fcd-805c-83ed009b4bb9",
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
				"name": "AMDNamee16463b2-7971-48aa-99cc-e1d1d98d474f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP02d802c6-a8e8-4acd-b88e-eaf48b72fd82",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDOrganizationalDataType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP7db79869-6717-41dc-8420-dc5d954bdbea",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDSalesOrganization",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPeea324f2-ab18-4848-b146-ad9e3a5ec456",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDServiceOrganization",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP0aa2e485-7374-4989-8588-32697a00fb29",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDDistributionChannel",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP74e7e628-5d20-4625-bdc5-1787772fd266",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDDivision",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP5d8308ea-9067-4674-8ee4-04bf2c368d65",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AMDSalesOffice",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPdda2ebbd-8e95-4662-9999-10f213f76234",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "AMDSalesGroup",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "AMDNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
