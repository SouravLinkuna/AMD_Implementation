define("AMDPosting1Page", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDPosting",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDPostingFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDPosting"
				}
			},
			"AMDSchemad9f7a46cDetail588e84ab": {
				"schemaName": "AMDSchemad9f7a46cDetail",
				"entitySchemaName": "AMDRequestRegionalBudgetDetail",
				"filter": {
					"detailColumn": "AMDPosting",
					"masterColumn": "Id"
				}
			},
			"AMDSchema4ad1aeacDetail7df971c8": {
				"schemaName": "AMDSchema4ad1aeacDetail",
				"entitySchemaName": "AMDRequestSubRegionalDistribution",
				"filter": {
					"detailColumn": "AMDAMDPosting",
					"masterColumn": "Id"
				}
			},
			"AMDSchema2b70b998Detaile14319d6": {
				"schemaName": "AMDSchema2b70b998Detail",
				"entitySchemaName": "AMDRequestMarketingFund",
				"filter": {
					"detailColumn": "AMDAMDPosting",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDRegionalBudget": {
				"08ba2cbe-59a8-4193-b0c2-54970305d0b1": {
					"uId": "08ba2cbe-59a8-4193-b0c2-54970305d0b1",
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
								"attribute": "AMDFundLevel"
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
								"attribute": "AMDRegionalBudget"
							}
						}
					]
				}
			},
			"AMDSubRegionalDistribution": {
				"a241638b-4f6e-4960-8870-44bb23091d86": {
					"uId": "a241638b-4f6e-4960-8870-44bb23091d86",
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
								"attribute": "AMDFundLevel"
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
								"attribute": "AMDSubRegionalDistribution"
							}
						}
					]
				}
			},
			"AMDMarketingFund": {
				"8b55f80d-3381-4b5f-b828-31dbbc6d769b": {
					"uId": "8b55f80d-3381-4b5f-b828-31dbbc6d769b",
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
								"attribute": "AMDFundLevel"
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
								"attribute": "AMDMarketingFund"
							}
						}
					]
				}
			},
			"AMDBalance": {
				"3825a52d-9f9c-49c4-8918-414befc24ca2": {
					"uId": "3825a52d-9f9c-49c4-8918-414befc24ca2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDRegionalBudget",
							"attributePath": "AMDBalance"
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
				"57543872-798f-4521-99b0-7b9715b8a8fd": {
					"uId": "57543872-798f-4521-99b0-7b9715b8a8fd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSubRegionalDistribution",
							"attributePath": "AMDBalance"
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
				},
				"065637f3-1bc0-4b6d-b743-b5134ab41600": {
					"uId": "065637f3-1bc0-4b6d-b743-b5134ab41600",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDMarketingFund",
							"attributePath": "AMDBalance"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDMarketingFund"
							}
						}
					]
				}
			},
			"AMDInitialAmount": {
				"cc6e5e74-d9d7-4a13-89c4-d36c25031626": {
					"uId": "cc6e5e74-d9d7-4a13-89c4-d36c25031626",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDRegionalBudget",
							"attributePath": "AMDBalance"
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
				"21bd0e3f-e320-4871-9080-a5b29bc72c01": {
					"uId": "21bd0e3f-e320-4871-9080-a5b29bc72c01",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDSubRegionalDistribution",
							"attributePath": "AMDBalance"
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
				},
				"b4e5f5cd-0570-4720-a49e-456e17120eba": {
					"uId": "b4e5f5cd-0570-4720-a49e-456e17120eba",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDMarketingFund",
							"attributePath": "AMDBalance"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDMarketingFund"
							}
						}
					]
				}
			},
			"AMDFundLevel": {
				"3565666a-2385-4c24-9244-dc09dc743456": {
					"uId": "3565666a-2385-4c24-9244-dc09dc743456",
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
								"attribute": "AMDRegionalBudget"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSubRegionalDistribution"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDMarketingFund"
							}
						}
					]
				}
			},
			"AMDName": {
				"0067775d-423f-4ab5-89c1-5402faec1a78": {
					"uId": "0067775d-423f-4ab5-89c1-5402faec1a78",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDName"
							}
						}
					]
				}
			},
			"Tab8d76c51aTabLabel": {
				"1a891725-ee0c-4393-b309-41e8c988edf5": {
					"uId": "1a891725-ee0c-4393-b309-41e8c988edf5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDRegionalBudget"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFundLevel"
							},
							"rightExpression": {
								"type": 0,
								"value": "f6ac747c-52af-4381-a0de-b4cd7c156e9f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Taba9c1dedbTabLabel": {
				"df1e735e-b4e2-4e6e-bc66-29095951c90e": {
					"uId": "df1e735e-b4e2-4e6e-bc66-29095951c90e",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDSubRegionalDistribution"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFundLevel"
							},
							"rightExpression": {
								"type": 0,
								"value": "6618dd9c-4e1a-4129-afeb-a55c0d52075c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Tab3f1aa3c0TabLabel": {
				"a1c8e201-59e1-4dd6-a0e5-7652d725b090": {
					"uId": "a1c8e201-59e1-4dd6-a0e5-7652d725b090",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDMarketingFund"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFundLevel"
							},
							"rightExpression": {
								"type": 0,
								"value": "f0a20bb4-031c-45a3-92ec-4aa8606653f0",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			runCustomProcess_Approve: function(){
					var primaryId = this.get("Id");
					if (primaryId) {
						var level=this.get("AMDFundLevel");
						console.log(level.displayValue);
						if(level.displayValue=="Regional Budget"){
						console.log("regional budget inside");
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDTransferAmountPostingL1",
							parameters: {
								requestid: primaryId
							}
						});
						}
						else if(level.displayValue=="Sub-Regional Distribution"){
						console.log("sub regional budget inside");
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDTransferAmountPostingL2",
							parameters: {
								requestid: primaryId
							}
						});
						}
						else{
						console.log("fund");
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDTransferAmountPostingL3",
							parameters: {
								requestid: primaryId
							}
						});
						}
					}
			}
			},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDApprove_1",
				"values": {
					"style": "green",
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AMDApprove"
					},
					"click": {
						"bindTo": "runCustomProcess_Approve"
					},
					"layout": {
						"column": 1,
						"row": 6,
						"colSpan": 1
					}
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "AMDName4ec40e90-f5b6-4a6c-aae1-589f5e69cfb2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDName",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDName4ec40e90f5b64a6caae1589f5e69cfb2LabelCaption"
						}
					},
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ModifiedOnecea2e4f-3bb6-43a1-b877-63b7a88d9579",
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
							"bindTo": "Resources.Strings.ModifiedOnecea2e4f3bb643a1b87763b7a88d9579LabelCaption"
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
				"name": "AMDFundLevel15e1f90c-441c-4ba8-9a62-4f16dcc0584e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundLevel"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP4f961a39-8211-4f35-b6e0-320661196352",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AMDRequestType364c57a8-6ad2-48f7-98a9-2f0ecd57d7d2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDRequestType"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER11c6ccc5-5178-4582-b736-8e60fd3e7c4d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDBalance",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP4f1b07af-d5e0-4638-8290-2e34b6ec6138",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDRegionalBudget",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUP4f1b07afd5e0463882902e34b6ec6138LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERf8037f9d-6673-4128-a141-722a44b85bdc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDTransferAmount",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPb8e0bce8-80a0-481a-abc1-387ef4d9459f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDSubRegionalDistribution",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPb8e0bce880a0481aabc1387ef4d9459fLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AMDInitialAmount882e14de-0284-4243-945b-882b6f54b016",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDInitialAmount",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPf087ff50-3820-4bb9-bf2e-4ac7120bb7cb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AMDMarketingFund",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPf087ff5038204bb9bf2e4ac7120bb7cbLabelCaption"
						}
					},
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab8d76c51aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab8d76c51aTabLabelTabCaption"
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
				"name": "AMDSchemad9f7a46cDetail588e84ab",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab8d76c51aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Taba9c1dedbTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba9c1dedbTabLabelTabCaption"
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
				"name": "AMDSchema4ad1aeacDetail7df971c8",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Taba9c1dedbTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab3f1aa3c0TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3f1aa3c0TabLabelTabCaption"
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
				"name": "AMDSchema2b70b998Detaile14319d6",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab3f1aa3c0TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
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
			}
		]/**SCHEMA_DIFF*/
	};
});
