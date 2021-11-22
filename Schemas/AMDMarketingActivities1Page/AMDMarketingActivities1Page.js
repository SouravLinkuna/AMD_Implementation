define("AMDMarketingActivities1Page", [], function() {
	return {
		entitySchemaName: "AMDMarketingActivities",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDMarketingActivitiesFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDMarketingActivities"
				}
			},
			"AMDSchema1e3e46f8Detail1d3ad87d": {
				"schemaName": "AMDSchema1e3e46f8Detail",
				"entitySchemaName": "AMDClaims",
				"filter": {
					"detailColumn": "Id",
					"masterColumn": "AMDClaims"
				}
			},
			"VisaDetailV2b3553a26": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "AMDMarketingActivitiesVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDMarketingActivities"
				}
			},
			"AMDSchemae77ed3b1Detaile97702f3": {
				"schemaName": "AMDSchemae77ed3b1Detail",
				"entitySchemaName": "AMDProductDetail",
				"filter": {
					"detailColumn": "AMDMarketingActivities",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDActivityType": {
				"3e661939-3763-4f8f-aad8-dcfb7e69bd1c": {
					"uId": "3e661939-3763-4f8f-aad8-dcfb7e69bd1c",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "AMDSpendType",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "AMDSpendType"
				},
				"6707aec0-ccb0-494c-a4b7-734a741212d2": {
					"uId": "6707aec0-ccb0-494c-a4b7-734a741212d2",
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
								"attribute": "AMDSpendType"
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
				"name": "LOOKUPf0e14728-8f25-4938-a6b9-4dec2902e18c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingFunds",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7e224b00-6931-4eed-8474-1b6fe550e6e6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingPlans",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPa191bd70-8798-4d59-a588-b3ebaa17e502",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingManager",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP4fcd202a-7070-4c98-9806-00835a152dd2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
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
				"name": "LOOKUP00e00436-9ca2-4717-8dca-67f27c718b14",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
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
				"name": "LOOKUP7859d4a6-a928-47d2-a7f9-47096c4e9e2e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7ae4708aTabLabelTabCaption"
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
				"name": "Tab7ae4708aTabLabelGroup45f278b1",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7ae4708aTabLabelGroup45f278b1GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabelGroup45f278b1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDNameb86d83a8-0f29-4ac7-b4c1-5de131c31002",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDName",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7276c0bf-fe55-4b21-ae21-6c6b41db45cd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDOwner",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER4bfdeb1d-b5d4-4541-9f4e-bdad78ef52a0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDTotalAmount",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP4828dc9e-9992-4763-9df1-a8a8afe7a6c4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDSpendType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPc282432f-4615-457d-bb24-3adc6fde99d3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDActivityType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRINGb9da5e2d-1a36-4067-976d-0b31a4156003",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDLocation",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRING9e8da476-afc8-436c-9f24-ea5b4fc57da6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDWHTTax",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRINGbabaeb93-527f-450f-8390-140c6758ed0b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDTaxCode",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRING8d6b274b-fb97-41e8-9121-2898004ae1d6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDTaxJurisdiction",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "INTEGER8b6f2f03-9316-477d-9bb1-4cca46246378",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDReimbRate",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "STRING4f69c6cd-f1a6-4afd-b9e2-d3f4fa0600a9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "Tab7ae4708aTabLabelGridLayout06deb3cd"
					},
					"bindTo": "AMDPOCSource",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout06deb3cd",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabelGroup3c865924",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7ae4708aTabLabelGroup3c865924GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabelGroup3c865924",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDate8b4ab971-594d-4814-891b-64bb5713d81f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDStartDate",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDStartDate8b4ab971594d4814891b64bb5713d81fLabelCaption"
						}
					}
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDate03f902dd-6d9b-4851-8daa-5ebc33a086a5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDEndDate",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDEndDate03f902dd6d9b48518daa5ebc33a086a5LabelCaption"
						}
					}
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGd6866861-48ed-4199-a352-a19947b9f082",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING5ed1482e-e933-4b11-a42e-74ff3d76376d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDStartYear",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGc4acf841-e210-48a6-9c93-cf692b360522",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING49b6806f-a1eb-4e7a-b21d-f3868d9f2193",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab7ae4708aTabLabelGridLayout6a62b185"
					},
					"bindTo": "AMDEndYear",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayout6a62b185",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabelGroupea53696f",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7ae4708aTabLabelGroupea53696fGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab7ae4708aTabLabelGridLayoutb0162d78",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab7ae4708aTabLabelGroupea53696f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME7f1aecb1-10fd-43e7-b9c9-ac968b43d399",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab7ae4708aTabLabelGridLayoutb0162d78"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayoutb0162d78",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING1b16cbf5-c463-4aa2-979c-adcd4c294579",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayoutb0162d78"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayoutb0162d78",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING9c877e75-dfd4-47e3-b83a-447be20d5545",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab7ae4708aTabLabelGridLayoutb0162d78"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": true
				},
				"parentName": "Tab7ae4708aTabLabelGridLayoutb0162d78",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabf1f60d37TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabf1f60d37TabLabelTabCaption"
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
				"name": "AMDSchemae77ed3b1Detaile97702f3",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabf1f60d37TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab18da87c2TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab18da87c2TabLabelTabCaption"
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
				"name": "AMDSchema1e3e46f8Detail1d3ad87d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab18da87c2TabLabel",
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
			},
			{
				"operation": "insert",
				"name": "Tabb64eba61TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 5
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "VisaDetailV2b3553a26",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabb64eba61TabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
