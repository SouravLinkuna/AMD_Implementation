define("AMDRequests1Page", [], function() {
	return {
		entitySchemaName: "AMDRequests",
		attributes: {
			"AMDFundCombine": {
					"caption": {"bindTo": "Resources.Strings.AMDFundCombine"},
					"dataValueType": this.Terrasoft.DataValueType.LOOKUP,
					"multiLookupColumns": ["AMDSourceRegionalBudget","AMDSourceSubRegionBudget","AMDSourceMarketingFund"],
					"isRequired": false
				},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDRequestsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDRequests"
				}
			},
			"AMDSchemad9f7a46cDetail5809c584": {
				"schemaName": "AMDSchemad9f7a46cDetail",
				"entitySchemaName": "AMDRequestRegionalBudgetDetail",
				"filter": {
					"detailColumn": "AMDRequest",
					"masterColumn": "Id"
				}
			},
			"AMDSchema4ad1aeacDetaild438667a": {
				"schemaName": "AMDSchema4ad1aeacDetail",
				"entitySchemaName": "AMDRequestSubRegionalDistribution",
				"filter": {
					"detailColumn": "AMDRequest",
					"masterColumn": "Id"
				}
			},
			"AMDSchema2b70b998Detaildaf9e164": {
				"schemaName": "AMDSchema2b70b998Detail",
				"entitySchemaName": "AMDRequestMarketingFund",
				"filter": {
					"detailColumn": "AMDRequest",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"Tabd04eef6aTabLabel": {
				"ce8469db-7673-4fc6-8e96-a89d8baddfef": {
					"uId": "ce8469db-7673-4fc6-8e96-a89d8baddfef",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "f6ac747c-52af-4381-a0de-b4cd7c156e9f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						}
					]
				}
			},
			"Tabb5a5d0feTabLabel": {
				"330a122e-f49e-4053-bd8a-c00be45ca7a1": {
					"uId": "330a122e-f49e-4053-bd8a-c00be45ca7a1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "6618dd9c-4e1a-4129-afeb-a55c0d52075c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						}
					]
				}
			},
			"Tab09554e5eTabLabel": {
				"61f88c96-e889-4461-a333-6d0647e508ca": {
					"uId": "61f88c96-e889-4461-a333-6d0647e508ca",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "f0a20bb4-031c-45a3-92ec-4aa8606653f0",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceMarketingFund"
							}
						}
					]
				}
			},
			"AMDBalance": {
				"b8d3cc77-d4f2-4092-980e-245aa703a9fc": {
					"uId": "b8d3cc77-d4f2-4092-980e-245aa703a9fc",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceRegionalBudget",
							"attributePath": "AMDBalance"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						}
					]
				},
				"fb7ccc76-58a9-4ec4-bbd1-5ff39fc25f77": {
					"uId": "fb7ccc76-58a9-4ec4-bbd1-5ff39fc25f77",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceSubRegionBudget",
							"attributePath": "AMDBalance"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						}
					]
				},
				"c7f227d8-02d4-42ef-91ad-49ac62698edb": {
					"uId": "c7f227d8-02d4-42ef-91ad-49ac62698edb",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceMarketingFund",
							"attributePath": "AMDBalance"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceMarketingFund"
							}
						}
					]
				}
			},
			"AMDSourceRegionalBudget": {
				"4f8d09cc-e41c-4f39-aae4-5e77f7e1b06e": {
					"uId": "4f8d09cc-e41c-4f39-aae4-5e77f7e1b06e",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "f6ac747c-52af-4381-a0de-b4cd7c156e9f",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						}
					]
				}
			},
			"AMDSourceSubRegionBudget": {
				"cdd5b369-ed0a-4d2c-8dd4-4f5b3677e0f1": {
					"uId": "cdd5b369-ed0a-4d2c-8dd4-4f5b3677e0f1",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "6618dd9c-4e1a-4129-afeb-a55c0d52075c",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						}
					]
				}
			},
			"AMDSourceMarketingFund": {
				"3e9268e2-97d9-4071-a3cc-f34cbce6de1a": {
					"uId": "3e9268e2-97d9-4071-a3cc-f34cbce6de1a",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFund"
							},
							"rightExpression": {
								"type": 0,
								"value": "f0a20bb4-031c-45a3-92ec-4aa8606653f0",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceMarketingFund"
							}
						}
					]
				}
			},
			"AMDTransferType": {
				"7ae97c34-4679-4f33-aac1-4159218c01c1": {
					"uId": "7ae97c34-4679-4f33-aac1-4159218c01c1",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDType"
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
			"AMDTransferAmount": {
				"852d6d16-80ea-4f6a-bfa8-27a329a72fab": {
					"uId": "852d6d16-80ea-4f6a-bfa8-27a329a72fab",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDTransferType"
							},
							"rightExpression": {
								"type": 0,
								"value": "3cc98b1d-e6b1-4a0f-ac4f-104da236745d",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDType"
							},
							"rightExpression": {
								"type": 0,
								"value": "f1ad6560-4634-4470-9bf8-10c55115e8e0",
								"dataValueType": 10
							}
						}
					]
				},
				"11283387-a26e-4e52-b4be-827e5084e273": {
					"uId": "11283387-a26e-4e52-b4be-827e5084e273",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDType"
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
			"AMDFund": {
				"3257646b-6b50-4148-9b6d-a6b2a1773139": {
					"uId": "3257646b-6b50-4148-9b6d-a6b2a1773139",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceMarketingFund"
							}
						}
					]
				}
			},
			"AMDInitialAmount": {
				"472e1ce3-96cb-46e0-bc86-76b940406ecb": {
					"uId": "472e1ce3-96cb-46e0-bc86-76b940406ecb",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceRegionalBudget",
							"attributePath": "AMDTotalAllocatedBudget"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						}
					]
				},
				"1bd139e0-18ee-4f44-b7ce-9b5070ce34cc": {
					"uId": "1bd139e0-18ee-4f44-b7ce-9b5070ce34cc",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceSubRegionBudget",
							"attributePath": "AMDTotalAllocatedBudget"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						}
					]
				},
				"cb829682-96cb-4ef8-b29f-7946f3fb0fc1": {
					"uId": "cb829682-96cb-4ef8-b29f-7946f3fb0fc1",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceMarketingFund",
							"attributePath": "AMDTotalAllocatedBudget"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceMarketingFund"
							}
						}
					]
				}
			},
			"AMDAccountingClassification": {
				"3b5c14e7-b2ff-4c7a-8c86-03974b1b30b4": {
					"uId": "3b5c14e7-b2ff-4c7a-8c86-03974b1b30b4",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceRegionalBudget",
							"attributePath": "AMDAccountingClassification"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
							}
						}
					]
				},
				"ea0341e8-d29d-430b-9805-34de2ae5dd00": {
					"uId": "ea0341e8-d29d-430b-9805-34de2ae5dd00",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSourceSubRegionBudget",
							"attributePath": "AMDRegionalBudget.AMDAccountingClassification"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceSubRegionBudget"
							}
						}
					]
				},
				"b6e692b1-dffe-4249-8015-66a988cc3c63": {
					"uId": "b6e692b1-dffe-4249-8015-66a988cc3c63",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSourceRegionalBudget"
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
				"name": "AMDName57327825-e0ff-49ec-91f1-351570dcdafb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDName",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDName57327825e0ff49ec91f1351570dcdafbLabelCaption"
						}
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ModifiedOne4b0ef51-44f9-4313-a21f-1a7d56683572",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ModifiedOn",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.ModifiedOne4b0ef5144f94313a21f1a7d56683572LabelCaption"
						}
					},
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AMDFund72ad6217-e85f-4276-9380-a8a3d1e4584f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFund",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDFund72ad6217e85f42769380a8a3d1e4584fLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP03258d25-d06b-4e3c-b219-bbdf2a0f649a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDAccountingClassification",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP7b260629-3cf6-43f9-8d21-f008c608b60c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AMDType492281e8-d259-4f4d-a377-703ccd19c98b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDType",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDType492281e8d2594f4da377703ccd19c98bLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERd8602026-aced-4450-8fc7-f7b43c8c46e3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDInitialAmount",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.INTEGERd8602026aced44508fc7f7b43c8c46e3LabelCaption"
						}
					},
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER62e32bc4-e738-4bfb-9f33-1cd09c711dc9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDTransferAmount",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERf3dd92dc-6caf-4e02-9589-6922f4815d8c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDBalance",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AMDFundCombine",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					},
					"controlConfig": {
						"enableLeftIcon": true,
						"leftIconConfig": {
							"bindTo": "getMultiLookupIconConfig"
						}
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tabd04eef6aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd04eef6aTabLabelTabCaption"
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
				"name": "AMDSchemad9f7a46cDetail5809c584",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabd04eef6aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabb5a5d0feTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabb5a5d0feTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AMDSchema4ad1aeacDetaild438667a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabb5a5d0feTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab09554e5eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab09554e5eTabLabelTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AMDSchema2b70b998Detaildaf9e164",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab09554e5eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
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
					"order": 4
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
