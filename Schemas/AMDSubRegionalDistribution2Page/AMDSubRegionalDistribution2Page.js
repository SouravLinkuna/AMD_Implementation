define("AMDSubRegionalDistribution2Page", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDSubRegionalDistribution",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDSubRegionalDistributionFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDSubRegionalDistribution"
				}
			},
			"AMDSchema9b1adf10Detail68b65721": {
				"schemaName": "AMDSchema9b1adf10Detail",
				"entitySchemaName": "Account",
				"filter": {
					"detailColumn": "Country",
					"masterColumn": "AMDCountry"
				}
			},
			"AMDSchema2e02fe7cDetail6d6d824a": {
				"schemaName": "AMDSchema2e02fe7cDetail",
				"entitySchemaName": "AMDMarketingFunds",
				"filter": {
					"detailColumn": "AMDSubRegionalDistribution",
					"masterColumn": "Id"
				}
			},
			"AMDSchema5f2230aaDetail8057356e": {
				"schemaName": "AMDSchema5f2230aaDetail",
				"entitySchemaName": "AMDPosting",
				"filter": {
					"detailColumn": "AMDSubRegionalDistribution",
					"masterColumn": "Id"
				}
			},
			"AMDSchemad5348ca0Detail1fbc606d": {
				"schemaName": "AMDSchemad5348ca0Detail",
				"entitySchemaName": "AMDRequests",
				"filter": {
					"detailColumn": "AMDSourceSubRegionBudget",
					"masterColumn": "Id"
				}
			},
			"AMDSchema4ad1aeacDetail91df8874": {
				"schemaName": "AMDSchema4ad1aeacDetail",
				"entitySchemaName": "AMDRequestSubRegionalDistribution",
				"filter": {
					"detailColumn": "AMDSubRegionalDistribution",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDCostCenter": {
				"40d858a9-c1ce-4595-bb21-6ac87e93da54": {
					"uId": "40d858a9-c1ce-4595-bb21-6ac87e93da54",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDName": {
				"05f1f16b-4b3c-47ed-834c-997f29543ed2": {
					"uId": "05f1f16b-4b3c-47ed-834c-997f29543ed2",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDTotalAllocatedBudget": {
				"8718c8ee-6b9a-4bae-a24a-e80f180300dc": {
					"uId": "8718c8ee-6b9a-4bae-a24a-e80f180300dc",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDRegionalBudget": {
				"8e737755-f4a1-4b4d-b2b4-30a5140c53e4": {
					"uId": "8e737755-f4a1-4b4d-b2b4-30a5140c53e4",
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
								"attribute": "AMDStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "dbbd2011-aff9-41d4-9b71-0fd2dca2bc91",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDRegionalDirector": {
				"05866cc8-fa0f-4734-8ebf-090d68f58837": {
					"uId": "05866cc8-fa0f-4734-8ebf-090d68f58837",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDCountry": {
				"4f9ea6e0-2375-4ead-82bb-0be6346b8c97": {
					"uId": "4f9ea6e0-2375-4ead-82bb-0be6346b8c97",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDStatus": {
				"b6166d36-bd9f-40cb-9276-400d6d103cc6": {
					"uId": "b6166d36-bd9f-40cb-9276-400d6d103cc6",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDSubRegionLookupCol": {
				"4a5ca652-b350-4f44-86f6-3dc05e80745a": {
					"uId": "4a5ca652-b350-4f44-86f6-3dc05e80745a",
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
								"value": "1589bc8b-da7f-4cb6-a08d-21797110139f",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			isDetailEnabled: function(detailName) {  
			if (detailName === "AMDSchema4ad1aeacDetail") {return false;}
				return this.callParent(arguments);
			},
			runCustomProcess: function(){
					var primaryId = this.get("Id");
					if (primaryId) {
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDProcess_AllocateAllL2fundstoL3",
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
				"name": "AMDAllocateL2FundstoL3_1",
				"values": {
					"style": "green",
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AMDAllocateL2FundstoL3"
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
				"name": "AMDName6ad57643-d1c1-4a4e-b63a-c73b8c322611",
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
				"name": "LOOKUP6909bdd4-272a-4dec-bf73-e3cc60e8fc34",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRegionalBudget",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP99525f3a-79a2-4f88-bfc8-769572b3950b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFinanceManager",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP6b15c9ff-cbb5-4174-84ab-d40d40b494ac",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDDivision",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP5916e5b0-77e6-48d5-b3a6-e5a464d84f35",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRegion",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP6526d52f-ed03-41ec-88ad-6496963c207d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCostCenter",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPe8c529bc-c658-4e1d-bc84-cef1f8324ad5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundType",
					"enabled": false,
					"contentType": 3,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPe8c529bcc6584e1dbc84cef1f8324ad5LabelCaption"
						}
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUPc19fa104-a6c9-4c7b-91bd-4f190cc6b180",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDAccountingClassification",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRING2e19069f-c73a-4f1d-bf74-0ceb6d1bb3b8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundIdEnum",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.STRING2e19069fc73a4f1dbf740ceb6d1bb3b8LabelCaption"
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
				"name": "LOOKUP5357da7d-1949-4e06-9332-f8fa95004a77",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "AMDStatus6d633b5f-5ea9-445a-b273-6113a3ea3bd5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDStatus"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "LOOKUP1545cbd9-e8a9-47e7-9258-265cdf8a6aec",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDProgram",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "LOOKUP0967b1e9-c3ef-4544-890f-20cedd3fba40",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDSalesOrg",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LOOKUPe22e3985-76f9-4ef7-a282-c186e1352bc3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDRegionalDirector",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER76d69dfe-f7c8-4a8a-b529-9cee156e705e",
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
				"name": "LOOKUP1f277440-d717-4574-b2d1-f3a4ccfa56e9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDSubRegionLookupCol",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER0d2ffc84-e0ba-42a5-b464-f1febedd21b2",
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
				"name": "AMDCountryc1fc597d-f6f1-48d1-ac0f-c28fbd89c956",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDCountry",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "INTEGERdda50236-80e6-45a8-83b0-b1cf77297c2e",
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
				"name": "Tab06edfffeTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab06edfffeTabLabelTabCaption"
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
				"name": "AMDSchema2e02fe7cDetail6d6d824a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab06edfffeTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab06edfffeTabLabelGroupbabd318f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab06edfffeTabLabelGroupbabd318fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab06edfffeTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab06edfffeTabLabelGroupbabd318f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDatef38d5e35-864b-4049-aba3-a9d74082a956",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDStartDate",
					"enabled": false,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDStartDatef38d5e35864b4049aba3a9d74082a956LabelCaption"
						}
					}
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDatecd24928e-a648-4887-aefa-01418b517e02",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDEndDate",
					"enabled": false,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDEndDatecd24928ea6484887aefa01418b517e02LabelCaption"
						}
					}
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING4cd9a599-e4fa-4a57-8306-3f9abfbda18f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING934100f8-a352-4ae3-9e8b-aeed419aa9ed",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDStartYear",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING84183a9f-6c5a-40a6-a43d-5ea4952f783f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING360a6c09-0653-4763-9054-dbfbe96f9041",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab06edfffeTabLabelGridLayout2830a9c1"
					},
					"bindTo": "AMDEndYear",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout2830a9c1",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab06edfffeTabLabelGroupea9ca262",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab06edfffeTabLabelGroupea9ca262GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab06edfffeTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab06edfffeTabLabelGridLayout1146feb7",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab06edfffeTabLabelGroupea9ca262",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME7a6148e4-3965-4d03-adea-86ce8e9a0951",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab06edfffeTabLabelGridLayout1146feb7"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout1146feb7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGaff91562-1b16-4b0a-b403-ac47b2e116fc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab06edfffeTabLabelGridLayout1146feb7"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout1146feb7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGe5663e82-34a7-4979-b555-4b00ef5fc2f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab06edfffeTabLabelGridLayout1146feb7"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": false
				},
				"parentName": "Tab06edfffeTabLabelGridLayout1146feb7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AMDSchema9b1adf10Detail68b65721",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab06edfffeTabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabac8a15baTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabac8a15baTabLabelTabCaption"
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
				"name": "AMDSchemad5348ca0Detail1fbc606d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabac8a15baTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabd5057a90TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd5057a90TabLabelTabCaption"
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
				"name": "AMDSchema4ad1aeacDetail91df8874",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabd5057a90TabLabel",
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
