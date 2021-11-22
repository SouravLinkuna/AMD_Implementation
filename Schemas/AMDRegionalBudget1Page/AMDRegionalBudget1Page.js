define("AMDRegionalBudget1Page", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDRegionalBudget",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDRegionalBudgetFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDRegionalBudget"
				}
			},
			"AMDSchema9b1adf10Detail2029565a": {
				"schemaName": "AMDSchema9b1adf10Detail",
				"entitySchemaName": "Account",
				"filter": {
					"detailColumn": "AMDRegion",
					"masterColumn": "AMDRegion"
				}
			},
			"AMDSchema2ab7e7ceDetail7a100eeb": {
				"schemaName": "AMDSchema2ab7e7ceDetail",
				"entitySchemaName": "AMDSubRegionalDistribution",
				"filter": {
					"detailColumn": "AMDRegionalBudget",
					"masterColumn": "Id"
				}
			},
			"AMDSchema5f2230aaDetail3bc0910d": {
				"schemaName": "AMDSchema5f2230aaDetail",
				"entitySchemaName": "AMDPosting",
				"filter": {
					"detailColumn": "AMDRegionalBudget",
					"masterColumn": "Id"
				}
			},
			"AMDSchemad5348ca0Detail16222afa": {
				"schemaName": "AMDSchemad5348ca0Detail",
				"entitySchemaName": "AMDRequests",
				"filter": {
					"detailColumn": "AMDSourceRegionalBudget",
					"masterColumn": "Id"
				}
			},
			"AMDSchemad9f7a46cDetailceec3d2b": {
				"schemaName": "AMDSchemad9f7a46cDetail",
				"entitySchemaName": "AMDRequestRegionalBudgetDetail",
				"filter": {
					"detailColumn": "AMDRegionalBudget",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDName": {
				"4bfe114a-f075-4335-aa55-d06f3ea33532": {
					"uId": "4bfe114a-f075-4335-aa55-d06f3ea33532",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDFundsPlan": {
				"35dd66d6-a649-4831-b0c6-fa0da4a3c346": {
					"uId": "35dd66d6-a649-4831-b0c6-fa0da4a3c346",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDFundType": {
				"d526bb82-6776-4e00-8f61-860292484c29": {
					"uId": "d526bb82-6776-4e00-8f61-860292484c29",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDCurrency": {
				"1e434408-4436-45e6-9889-f13ceb0195c7": {
					"uId": "1e434408-4436-45e6-9889-f13ceb0195c7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDFinanceManager": {
				"b2b7b45d-094b-43c4-8548-d3c74f8a99c1": {
					"uId": "b2b7b45d-094b-43c4-8548-d3c74f8a99c1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDCostCenter": {
				"7da5f684-5180-4601-8baf-18c127435a47": {
					"uId": "7da5f684-5180-4601-8baf-18c127435a47",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDSalesOrg": {
				"349a0323-4eb1-4a6c-bcda-1b4ebe6b9f29": {
					"uId": "349a0323-4eb1-4a6c-bcda-1b4ebe6b9f29",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDTotalAllocatedBudget": {
				"2b21c53e-fe00-42cb-9c92-0fbfbbd5e6f3": {
					"uId": "2b21c53e-fe00-42cb-9c92-0fbfbbd5e6f3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDParentFundId": {
				"abb93be1-7f3d-45f8-ad1b-1cea47f5cd9c": {
					"uId": "abb93be1-7f3d-45f8-ad1b-1cea47f5cd9c",
					"enabled": false,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDFundsPlan",
							"attributePath": "AMDFundPlanID"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDFundsPlan"
							}
						}
					]
				}
			},
			"AMDStatus": {
				"ffec4082-ad72-4cfe-a0c9-a0fd1e2a3090": {
					"uId": "ffec4082-ad72-4cfe-a0c9-a0fd1e2a3090",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "a82daf57-45cc-4c3a-82f6-0a1409cdc1f0",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			isDetailEnabled: function(detailName) {  
			if (detailName === "AMDSchemad9f7a46cDetail") {return false;}
				return this.callParent(arguments);
			},
			runCustomProcess: function(){
					var primaryId = this.get("Id");
					if (primaryId) {
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDProcess_AllocateAllL1fundstoL2",
							parameters: {
								RecordId: primaryId
							}
						});

					}
			},
			balancenotzero: function(){
				//var activeRowId = this.get("ActiveRow");
				//if (activeRowId){
				var balance=this.get("AMDBalance");
				console.log(balance);
				//this.set()
				if(balance==0){
					return false;
				}
				else{
					return true;
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDAllocateL1FundstoL2_1",
				"values": {
					"style": "green",
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AMDAllocateL1FundstoL2"
					},
					"enabled": {
						"bindTo": "balancenotzero"
					},
					"click": {
						"bindTo": "runCustomProcess"
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
				"name": "AMDName83dea14d-2962-4f0f-9d1a-619d44ed9f03",
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
							"bindTo": "Resources.Strings.AMDName83dea14d29624f0f9d1a619d44ed9f03LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDFundsPlan92799d80-3593-4f1e-8e6a-fe58ac1610ea",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundsPlan"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP2425ac51-a57e-4079-9fab-d758dbdd4a7c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDProgram",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPe4f3ba58-28b9-47e9-a57b-526b9aec1f84",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRegion",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP712ec3bd-a99d-4edf-b8ad-75a3da63b845",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDDivision",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AMDFundType58c12b4e-1ecb-4279-9fde-2574daacb536",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundType",
					"enabled": true,
					"contentType": 3,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDFundType58c12b4e1ecb42799fde2574daacb536LabelCaption"
						}
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP0d0f815a-6cbb-49e1-aca8-4a25ea0d32e7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDAccountingClassification",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "AMDCurrency364acc7f-11f2-4b77-b292-15771ce42f40",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "AMDFundIDenumb4c2ae0f-f157-463d-b51c-6ab7d98ac60f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundIDenum",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDFundIDenumb4c2ae0ff157463db51c6ab7d98ac60fLabelCaption"
						}
					},
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "STRINGf310df30-7b60-40f4-9fbf-faad91dfcae1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDParentFundId",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "AMDStatuse18d2c43-6914-482a-8ce4-6b89abbc52c1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "STRING23500c86-67f4-435b-a00f-b265d2596f21",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCostCenterDescription",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "AMDFinanceManager44aa65d7-9db9-4fee-81a9-70dcdf9f0ae2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDFinanceManager"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER4d3572c6-89b4-41e3-b566-f4a5da8868bc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDTotalAllocatedBudget",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP8f357b45-fe13-4265-98c0-364a1ba647cf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDCostCenter",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER00a3c624-fc48-4dbf-acc8-99048be53d32",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDConsumed",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP2adeb3c9-c49f-46e5-80b1-be9e70999ac1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDSalesOrg",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "INTEGER6b9e3b78-e780-453e-8ab1-398bee773c39",
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
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4cd03cd5TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4cd03cd5TabLabelTabCaption"
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
				"name": "AMDSchema2ab7e7ceDetail7a100eeb",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4cd03cd5TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4cd03cd5TabLabelGroup990d3cdf",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4cd03cd5TabLabelGroup990d3cdfGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4cd03cd5TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4cd03cd5TabLabelGroup990d3cdf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDate291db4ac-f9c8-4c72-b7e0-a82cd77d5b41",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDStartDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDStartDate291db4acf9c84c72b7e0a82cd77d5b41LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDate2b2389c0-7324-4b42-9ca4-bc8d77c1a8f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDEndDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDEndDate2b2389c073244b429ca4bc8d77c1a8f5LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGf3619fa0-c84b-488a-b46a-249e07ed15a5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING8bb7a2f2-611f-4008-8f50-77fc855410e0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDStartYear",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING95d08483-d42d-4c96-9d70-3274e60357a4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING4b92a841-c8fa-4e25-84aa-783e13505fee",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab4cd03cd5TabLabelGridLayout2ca6587f"
					},
					"bindTo": "AMDEndYear",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayout2ca6587f",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab4cd03cd5TabLabelGroupd032e9e9",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4cd03cd5TabLabelGroupd032e9e9GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4cd03cd5TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab4cd03cd5TabLabelGridLayouta5c445a9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4cd03cd5TabLabelGroupd032e9e9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME8c67e6a1-be01-44ff-a240-ce3412a52e24",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4cd03cd5TabLabelGridLayouta5c445a9"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": true
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayouta5c445a9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGb3b8e480-5535-4d7e-9f90-cdc23e0b0309",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab4cd03cd5TabLabelGridLayouta5c445a9"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayouta5c445a9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGe8a0fb3e-b9db-4206-b282-114266da0f43",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab4cd03cd5TabLabelGridLayouta5c445a9"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": false
				},
				"parentName": "Tab4cd03cd5TabLabelGridLayouta5c445a9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AMDSchema9b1adf10Detail2029565a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4cd03cd5TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab9d7534d8TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9d7534d8TabLabelTabCaption"
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
				"name": "AMDSchemad5348ca0Detail16222afa",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab9d7534d8TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab7c2c1395TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7c2c1395TabLabelTabCaption"
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
				"name": "AMDSchemad9f7a46cDetailceec3d2b",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab7c2c1395TabLabel",
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
