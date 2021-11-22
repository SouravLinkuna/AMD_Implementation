define("AMDMarketingPlans1Page", [], function() {
	return {
		entitySchemaName: "AMDMarketingPlans",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDMarketingPlansFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDMarketingPlans"
				}
			},
			"AMDSchemaecb35b0dDetaile6df5752": {
				"schemaName": "AMDSchemaecb35b0dDetail",
				"entitySchemaName": "AMDMarketingActivities",
				"filter": {
					"detailColumn": "AMDMarketingPlans",
					"masterColumn": "Id"
				}
			},
			"AMDSchema1e3e46f8Detaild995db6d": {
				"schemaName": "AMDSchema1e3e46f8Detail",
				"entitySchemaName": "AMDClaims",
				"filter": {
					"detailColumn": "AMDMarketingPlan",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV2fa21b4b0": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "AMDMarketingPlansVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDMarketingPlans"
				}
			},
			"AMDSchema45683dd2Detail5dfb57da": {
				"schemaName": "AMDSchema45683dd2Detail",
				"entitySchemaName": "AMDClientDollars",
				"filter": {
					"detailColumn": "AMDAMDMarketingPlans",
					"masterColumn": "Id"
				}
			},
			"AMDSchemadccfb238Detaild768decc": {
				"schemaName": "AMDSchemadccfb238Detail",
				"entitySchemaName": "AMDGraphicsDollars",
				"filter": {
					"detailColumn": "AMDAMDMarketingPlans",
					"masterColumn": "Id"
				}
			},
			"AMDSchemae77ed3b1Detail7c8b4af1": {
				"schemaName": "AMDSchemae77ed3b1Detail",
				"entitySchemaName": "AMDProductDetail",
				"filter": {
					"detailColumn": "AMDAMDMarketingPlans",
					"masterColumn": "Id"
				}
			},
			"AMDSchema9632be92Detail51c1992f": {
				"schemaName": "AMDSchema9632be92Detail",
				"entitySchemaName": "AMDRRTable",
				"filter": {
					"detailColumn": "AMDAMDMarketingPlans",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AMDAssociatePayeeCode": {
				"5eb80809-1686-4bf1-b8a5-d1bf8be1b441": {
					"uId": "5eb80809-1686-4bf1-b8a5-d1bf8be1b441",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDAssociatePartnerName",
							"attributePath": "AMDAssociatePayeeCode"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDAssociatePartnerName"
							},
							"rightExpression": {
								"type": 0,
								"value": "0005e141-9f4b-4e5b-8277-bd3c1de2abde",
								"dataValueType": 10
							}
						}
					]
				},
				"98054329-6ef8-4e20-899e-b90bb5f9c28e": {
					"uId": "98054329-6ef8-4e20-899e-b90bb5f9c28e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDAssociatePartnerName",
							"attributePath": "AMDAssociatePayeeCode"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDAssociatePartnerName"
							},
							"rightExpression": {
								"type": 0,
								"value": "b9b2da9a-ffc6-4998-a776-a93dd17d3935",
								"dataValueType": 10
							}
						}
					]
				},
				"0fa32e3c-3348-4a44-aa76-f3b8ab810d01": {
					"uId": "0fa32e3c-3348-4a44-aa76-f3b8ab810d01",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDAssociatePartnerName",
							"attributePath": "AMDAssociatePayeeCode"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDAssociatePartnerName"
							},
							"rightExpression": {
								"type": 0,
								"value": "6455c92d-bff3-42cb-b90f-d24c20bc8f82",
								"dataValueType": 10
							}
						}
					]
				},
				"1367523d-a09b-405b-9e81-cfcfc25a2d63": {
					"uId": "1367523d-a09b-405b-9e81-cfcfc25a2d63",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AMDAssociatePartnerName",
							"attributePath": "AMDAssociatePayeeCode"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AMDAssociatePartnerName"
							},
							"rightExpression": {
								"type": 0,
								"value": "fd5aa8a4-c9b2-48ef-99a5-e5c04a95c5d9",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AMDAssociatePartnerName": {
				"0c34e292-93f9-46cf-bf34-a8adeda1ad10": {
					"uId": "0c34e292-93f9-46cf-bf34-a8adeda1ad10",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "3bc7aff8-bebd-491d-b177-438f84284347",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDRequest_Reservation1",
				"values": {
					"style": "green",
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AMDRequest_Reservation"
					},
					"click": {
						"bindTo": "request_reservation1"
					},
					"layout": {
						"column": 1,
						"row": 6,
						"colSpan": 1
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AMDName099536c3-35fc-4ca0-b74c-205d481b09a3",
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
							"bindTo": "Resources.Strings.AMDName099536c335fc4ca0b74c205d481b09a3LabelCaption"
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
				"name": "STRING8c8c6bb3-3e48-4b22-85d1-7c3d295889c4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRevisionNumber",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING29f0291c-be30-4c44-bb86-68bacf610ada",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDReservationID",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPe6dead3b-fcdf-4e26-9938-fefe85d0966e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingFund",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPdbf8d4da-9f82-4e61-880e-2aa39c5f56f4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingManager",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPe1699d29-ecff-43f3-9f44-245a519e32de",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDRegion",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP85bfaacc-9d5e-43be-819a-4d70aeece301",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCountry",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP0579879e-2787-43e9-9673-076ecd5ccb81",
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
				"name": "LOOKUPef4611f0-a6eb-439d-aefd-88009f3b430e",
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
				"index": 8
			},
			{
				"operation": "insert",
				"name": "LOOKUPd911f355-f27e-480b-8a43-a8a2db0d88f0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
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
				"name": "LOOKUP48f2e72b-a12a-448a-a10a-53508e6ce8f1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
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
				"name": "LOOKUP95e80166-cd18-4084-ad50-5e607889c162",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundType",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "LOOKUP1007c923-90b5-4d0a-b05c-820073c4512c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
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
				"name": "LOOKUP7ad3c225-a4b3-4a6b-9aca-44402c26907e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
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
				"name": "INTEGERd08276ca-905f-4f43-86aa-d9f06c7eac85",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDReservationAmount",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER11794a5d-4533-4951-b34e-183727d9745f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDConsumedByClaims",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER2c2b7b06-230d-48e1-aefc-c8bf67f311d7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDBalance",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP42660c76-2aa8-4a84-8f1f-ab40d23ae789",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDApprover",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP89223896-a3c5-42e7-8ea8-8b15494b5ad0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDOrigination",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP08563aff-e2f9-4b52-abd9-719b0670b3b2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AMDAssociatePartnerName",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP90e1171e-9367-48e0-beed-2680390273d7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AMDAssociatePayeeCode",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbb9f40a5TabLabelTabCaption"
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
				"name": "Tabbb9f40a5TabLabelGroup7a0cc332",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbb9f40a5TabLabelGroup7a0cc332GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabelGroup7a0cc332",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDateedf35c8a-24dc-4537-b190-5ef8f607d87d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDStartDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDStartDateedf35c8a24dc4537b1905ef8f607d87dLabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDate79f7f04e-d072-4344-94a5-df2d81db1732",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDEndDate",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDEndDate79f7f04ed072434494a5df2d81db1732LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING9dad3d05-941b-4732-b1b5-781a37dfdfac",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING0232974a-930d-4917-b54a-ffaa58f8fc25",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDStartYear",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING7cda389d-392d-4026-964c-10772242bee3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING797b964b-686b-4d8f-93f9-f9f6a50ac807",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d"
					},
					"bindTo": "AMDEndYear",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout7ef7d44d",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGroup40834bc4",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbb9f40a5TabLabelGroup40834bc4GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGridLayout37e24715",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabelGroup40834bc4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME95fc8472-9c62-42bf-9703-af2c03b1b493",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout37e24715"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout37e24715",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGb552b774-f8a1-456b-a5c2-ef1de06590fe",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout37e24715"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout37e24715",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING64feebbb-3b13-4f69-a0e2-0d94b4d6ff3c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayout37e24715"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayout37e24715",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AMDSchemaecb35b0dDetaile6df5752",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AMDSchema1e3e46f8Detaild995db6d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGroupdd8660ba",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbb9f40a5TabLabelGroupdd8660baGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabelGroupdd8660ba",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING1e1c80f8-f527-4385-bf83-1eb97c9b1a7f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPayeeID",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPc24c0297-a187-4cda-b346-371dbec592c3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPayeeName",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP389cc3e7-a9c9-4187-bf6a-696ea27fbad3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPayeeType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING4ae7929e-6489-4518-ad5e-50ab554d47ac",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPaymentTerm",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BOOLEAN5675c69b-a790-472c-afe4-a0acbb7247ec",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPassthru",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING1b315be9-5887-4d43-b366-f71d18ad39c9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPassthruActualexecutor",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRINGe106ca38-540a-4652-8b83-d3952ee96800",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutc045d04b"
					},
					"bindTo": "AMDPassthruEarningPartner",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutc045d04b",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGroup87a6a878",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbb9f40a5TabLabelGroup87a6a878GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabel",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabbb9f40a5TabLabelGridLayoutbc7dd909",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbb9f40a5TabLabelGroup87a6a878",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING42141fe4-5fb0-41cf-9d2f-da736a73220b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutbc7dd909"
					},
					"bindTo": "AMDContractID",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutbc7dd909",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING50524022-1e9d-42b6-b36a-97a5d6bcfb45",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabbb9f40a5TabLabelGridLayoutbc7dd909"
					},
					"bindTo": "AMDRevision",
					"enabled": true
				},
				"parentName": "Tabbb9f40a5TabLabelGridLayoutbc7dd909",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab3d79b90dTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab3d79b90dTabLabelTabCaption"
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
				"name": "AMDSchema9632be92Detail51c1992f",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab3d79b90dTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabda640c47TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabda640c47TabLabelTabCaption"
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
				"name": "Tabda640c47TabLabelGroup85882ab7",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabda640c47TabLabelGroup85882ab7GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabda640c47TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabda640c47TabLabelGridLayout77f7f64d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabda640c47TabLabelGroup85882ab7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGf05a77d0-4b1c-44f0-8bc4-580240652549",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabda640c47TabLabelGridLayout77f7f64d"
					},
					"bindTo": "AMDKPIName",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.STRINGf05a77d04b1c44f08bc4580240652549LabelCaption"
						}
					}
				},
				"parentName": "Tabda640c47TabLabelGridLayout77f7f64d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERb1bf9688-f047-4740-ad0e-fa700f83eb3d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabda640c47TabLabelGridLayout77f7f64d"
					},
					"bindTo": "AMDPlanAmount",
					"enabled": true
				},
				"parentName": "Tabda640c47TabLabelGridLayout77f7f64d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGf5816132-f66e-4952-8a3c-13037f8ad548",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabda640c47TabLabelGridLayout77f7f64d"
					},
					"bindTo": "AMDDescription",
					"enabled": true
				},
				"parentName": "Tabda640c47TabLabelGridLayout77f7f64d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGERf01fc99a-efc8-4bde-85d2-0fed32b2e596",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tabda640c47TabLabelGridLayout77f7f64d"
					},
					"bindTo": "AMDActualAmount",
					"enabled": true
				},
				"parentName": "Tabda640c47TabLabelGridLayout77f7f64d",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPa2ea1c9b-8d81-4bda-b3f9-103eff24ff63",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabda640c47TabLabelGridLayout77f7f64d"
					},
					"bindTo": "AMDUnitBase",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabda640c47TabLabelGridLayout77f7f64d",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tabdcfaed76TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabdcfaed76TabLabelTabCaption"
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
				"name": "AMDSchema45683dd2Detail5dfb57da",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabdcfaed76TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDSchemadccfb238Detaild768decc",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabdcfaed76TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabe8a66ad3TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8a66ad3TabLabelTabCaption"
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
				"name": "Tabe8a66ad3TabLabelGroup1457f3a0",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe8a66ad3TabLabelGroup1457f3a0GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe8a66ad3TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe8a66ad3TabLabelGridLayout107446e2",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe8a66ad3TabLabelGroup1457f3a0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING1c3a00bf-3342-4532-8978-5e371de5a904",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 4,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe8a66ad3TabLabelGridLayout107446e2"
					},
					"bindTo": "AMDPODetails",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabe8a66ad3TabLabelGridLayout107446e2",
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
					"order": 5
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 5
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
					"order": 6
				}
			},
			{
				"operation": "insert",
				"name": "Tabb5530fcfTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 7
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "VisaDetailV2fa21b4b0",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabb5530fcfTabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
