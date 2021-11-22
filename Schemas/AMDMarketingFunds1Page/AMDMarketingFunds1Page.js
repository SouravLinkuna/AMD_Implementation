define("AMDMarketingFunds1Page", [], function() {
	return {
		entitySchemaName: "AMDMarketingFunds",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDMarketingFundsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDMarketingFunds"
				}
			},
			"AMDSchemac66c1ad9Detailf56633cf": {
				"schemaName": "AMDSchemac66c1ad9Detail",
				"entitySchemaName": "AMDMarketingPlans",
				"filter": {
					"detailColumn": "AMDMarketingFund",
					"masterColumn": "Id"
				}
			},
			"AMDSchema3ade3461Detaile90060e6": {
				"schemaName": "AMDSchema3ade3461Detail",
				"entitySchemaName": "AMDMarketingActivities",
				"filter": {
					"detailColumn": "AMDMarketingFunds",
					"masterColumn": "Id"
				}
			},
			"AMDSchema2b70b998Detail4ee51114": {
				"schemaName": "AMDSchema2b70b998Detail",
				"entitySchemaName": "AMDRequestMarketingFund",
				"filter": {
					"detailColumn": "AMDMarketingFund",
					"masterColumn": "Id"
				}
			},
			"AMDSchemad5348ca0Detaild3c19486": {
				"schemaName": "AMDSchemad5348ca0Detail",
				"entitySchemaName": "AMDRequests",
				"filter": {
					"detailColumn": "AMDSourceMarketingFund",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDBusinessOwner": {
				"5254983c-026e-4b53-a384-9642da58a6a1": {
					"uId": "5254983c-026e-4b53-a384-9642da58a6a1",
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
								"attribute": "AMDMarketingFundsStatus"
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
			"AMDCompany": {
				"1e19c91c-d1e5-4c97-b404-f819683bf6dc": {
					"uId": "1e19c91c-d1e5-4c97-b404-f819683bf6dc",
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
								"attribute": "AMDMarketingFundsStatus"
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
				"2da5a509-a383-4517-8fb1-631aca634939": {
					"uId": "2da5a509-a383-4517-8fb1-631aca634939",
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
								"attribute": "AMDMarketingFundsStatus"
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
				"fd7a13b6-ae86-4e2e-b592-2ead08fc458a": {
					"uId": "fd7a13b6-ae86-4e2e-b592-2ead08fc458a",
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
								"attribute": "AMDMarketingFundsStatus"
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
			"AMDMarketingFundsStatus": {
				"43eca75f-05df-49d4-b992-27d3cba02aee": {
					"uId": "43eca75f-05df-49d4-b992-27d3cba02aee",
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
								"attribute": "AMDMarketingFundsStatus"
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
			if (detailName === "AMDSchema2b70b998Detail") {return false;}
				return this.callParent(arguments);
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDName1c89a722-9969-4189-b38d-4e23c3c89d48",
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
				"name": "LOOKUPe9c6cfaa-51b4-4124-b1d5-5ac56646f75a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDSubRegionalDistribution",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP63cbc457-f277-4108-99e4-c881808542a7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRegionalDirector",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPa8bc4769-d787-40cc-bcae-9a3e865d7aae",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP45b1bf69-6a2f-476f-9cf0-4c81bdcd899d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCountry",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING0841deb9-f1c7-4b46-b81f-8143d5ebfabb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundIDEnum",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPd05d494b-6f30-4806-9fb8-d284a71cb143",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "AMDMarketingFundsStatuse0aea04f-0f08-4dc3-9c0b-7c25bb2be69c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingFundsStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP6777cbec-ab8d-4e19-9f2d-eaf07bc5f6ab",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDProgram",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "LOOKUP22eb7a00-5a56-48f3-af3a-182acb866012",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDDivision",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "LOOKUPda707d70-b54e-4ac5-a313-04b166ef18bb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDAccountingClassification",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "LOOKUPd48e915c-c073-4d22-98ea-9c94e63f2ffc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "LOOKUP67ef2dfb-718e-4647-bb10-7624ec374239",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCostCenter",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LOOKUP2bd94345-8371-496a-bb52-364bbf6bf7a7",
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
				"index": 13
			},
			{
				"operation": "insert",
				"name": "LOOKUP15a7ed88-39b8-4dc8-a4ae-0f86de76e66c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDBusinessOwner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERebb22785-81e6-4324-8b89-eafcc3f862ae",
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
				"name": "LOOKUP6f1b1711-ef77-4100-ae41-c27d259f4454",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDCompany",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERe62522c2-87fa-4a48-a70c-96311104f688",
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
				"name": "STRING431b8429-fa6a-4122-8374-057d5292e397",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDChannelPartnerVendorID",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "INTEGER7602d596-f7c0-4538-bea7-222f9f2efaef",
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
				"name": "Tab1d8d9872TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1d8d9872TabLabelTabCaption"
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
				"name": "AMDSchemac66c1ad9Detailf56633cf",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab1d8d9872TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab1d8d9872TabLabelGroup1c108957",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1d8d9872TabLabelGroup1c108957GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab1d8d9872TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab1d8d9872TabLabelGroup1c108957",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDatecdf45600-6435-4950-90f8-f5d73823810b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDStartDate",
					"enabled": false,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDStartDatecdf456006435495090f8f5d73823810bLabelCaption"
						}
					}
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDate2ddb8dbe-f9d0-4662-88e0-cc4c3ea21976",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDEndDate",
					"enabled": false,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDEndDate2ddb8dbef9d0466288e0cc4c3ea21976LabelCaption"
						}
					}
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGec0e6ef0-d56f-4f2e-b31c-6067f429ae7c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRINGd67fbe21-7274-4079-b836-7234b4da35a3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDStartYear",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGe7e79491-34a0-4b2b-98cf-547cfb5c14ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRINGd048f479-d516-48ef-8751-e8c104255678",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab1d8d9872TabLabelGridLayout9c3a706b"
					},
					"bindTo": "AMDEndYear",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout9c3a706b",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab1d8d9872TabLabelGroup1991a4cb",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1d8d9872TabLabelGroup1991a4cbGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab1d8d9872TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab1d8d9872TabLabelGridLayout1bd6900c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab1d8d9872TabLabelGroup1991a4cb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME84c9d48a-5219-44e4-bbd4-061bc7e0ba57",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab1d8d9872TabLabelGridLayout1bd6900c"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout1bd6900c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING568bb42e-029c-4fa4-818c-4d9c0c4e4dae",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab1d8d9872TabLabelGridLayout1bd6900c"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout1bd6900c",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING5857a6a1-97a0-4d6a-8f55-896281ec808d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab1d8d9872TabLabelGridLayout1bd6900c"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": false
				},
				"parentName": "Tab1d8d9872TabLabelGridLayout1bd6900c",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab9232e028TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab9232e028TabLabelTabCaption"
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
				"name": "AMDSchemad5348ca0Detaild3c19486",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab9232e028TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab0f3b9698TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab0f3b9698TabLabelTabCaption"
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
				"name": "AMDSchema2b70b998Detail4ee51114",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab0f3b9698TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe4571b12TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe4571b12TabLabelTabCaption"
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
				"name": "AMDSchema3ade3461Detaile90060e6",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabe4571b12TabLabel",
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
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
