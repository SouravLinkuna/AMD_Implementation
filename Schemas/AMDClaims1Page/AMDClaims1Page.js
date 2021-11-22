define("AMDClaims1Page", [], function() {
	return {
		entitySchemaName: "AMDClaims",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AMDClaimsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDClaims"
				}
			},
			"AMDSchemaecb35b0dDetail05ca6447": {
				"schemaName": "AMDSchemaecb35b0dDetail",
				"entitySchemaName": "AMDMarketingActivities",
				"filter": {
					"detailColumn": "AMDClaims",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV26459c878": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "AMDClaimsVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AMDClaims"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDClaimID7be7b675-05f6-4249-bd91-ea84abb9c759",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDClaimID"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPf305d9d1-28e7-4b8c-a0b5-77596c80f9e2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingFund",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP25bda257-93b1-4d69-98be-7dd673ed1722",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDMarketingPlan",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP8028b382-8b74-45e4-9f23-ab9aea994fe6",
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
				"name": "LOOKUPf0e9a1c0-8f53-46b0-8e1e-016011c787e5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDProgram",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP2daa71e6-05ee-4ed8-a622-5eed806e0de5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDDivision",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPe59619dd-97c4-41c9-babb-db93d0d8fcc6",
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
				"name": "LOOKUP52876829-53c0-497b-82b4-c66080152f14",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDFundType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP203c9d5e-abb0-4b37-be01-11f59ef39225",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "LOOKUP53e6f91a-ef5d-4944-96af-2a4bf49e8335",
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
				"index": 9
			},
			{
				"operation": "insert",
				"name": "LOOKUP7e0964e8-c501-4d94-85c1-a9c1a3a7fe4f",
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
				"index": 10
			},
			{
				"operation": "insert",
				"name": "AMDClaimStatus546bca1e-ee5b-496a-8fd8-18ee43c07845",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AMDClaimStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "AMDNameab265066-9da5-4906-946a-16718e5d2ae9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDName",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.AMDNameab2650669da54906946a16718e5d2ae9LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGER473f778a-c307-43dc-80d6-4542c71b4fd6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AMDTotalAmount",
					"enabled": true,
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.INTEGER473f778ac30743dc80d64542c71b4fd6LabelCaption"
						}
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGERc1582e94-a5f2-4db6-8f90-8a44017cb922",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AMDTax",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER8edc6b6a-6027-4fe4-9f96-4a75719efa98",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AMDIncludeTax",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab87d49a3aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab87d49a3aTabLabelTabCaption"
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
				"name": "AMDSchemaecb35b0dDetail05ca6447",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab87d49a3aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelTabCaption"
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
				"name": "Tab77a9518eTabLabelGroup4261293e",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelGroup4261293eGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77a9518eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77a9518eTabLabelGroup4261293e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING99f0662e-dc21-4cef-8f2a-5996d72ec94e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDPayeeID",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP5735fe11-bf47-4457-a655-2fb57008893d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDPayeeName",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP4602c2e8-2a0e-477b-b5a1-43bd71d8de0a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDPayeeType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING48574286-4b22-4d47-933e-8ab381eddb75",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDPassthruActualExecutor",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGf0a3087e-29eb-4317-8ae4-98f857701d75",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDPassthruEarningPartner",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3ab0c0ef-be9e-46ca-a0dd-21e16cb5cbee",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab77a9518eTabLabelGridLayoutbf847c66"
					},
					"bindTo": "AMDCriticalPayeeFlag",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutbf847c66",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGroup508543e2",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelGroup508543e2GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77a9518eTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGridLayout174ba7cd",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77a9518eTabLabelGroup508543e2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING85b42427-4a71-41ba-bdd1-116c8715cddb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayout174ba7cd"
					},
					"bindTo": "AMDBankingDetails",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout174ba7cd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP8e273740-337a-4404-be0a-181636099ba3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayout174ba7cd"
					},
					"bindTo": "AMDPaymentMethod",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab77a9518eTabLabelGridLayout174ba7cd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGf2edd2c7-fcdc-4cc3-b542-df3f4e6a10f8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 2,
						"layoutName": "Tab77a9518eTabLabelGridLayout174ba7cd"
					},
					"bindTo": "AMDPurposeofPayment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tab77a9518eTabLabelGridLayout174ba7cd",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGroup28802755",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelGroup28802755GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77a9518eTabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGridLayoutd0b4b99d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77a9518eTabLabelGroup28802755",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING21ab63cc-84b0-439a-89ac-98285fe4c987",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayoutd0b4b99d"
					},
					"bindTo": "AMDReservationID",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutd0b4b99d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGaa1a2814-e4c0-409d-bde4-a4b604b3d46a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayoutd0b4b99d"
					},
					"bindTo": "AMDContractID",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayoutd0b4b99d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGroup31996828",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelGroup31996828GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77a9518eTabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77a9518eTabLabelGroup31996828",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDStartDate6ad42d81-f106-459b-837d-0704ad5d50fa",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDStartDate"
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AMDEndDatec49bde2d-ca12-4ef7-915a-bb6a693633f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDEndDate"
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING13c370f3-3da9-41e1-aecd-45ac2fa7f850",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDStartQuarter",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING0a7c066c-01b8-429d-a5be-e3f7dffa8b95",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDStartYear",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRINGb940e7e0-bf52-417d-851c-3fb276969568",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDEndQuarter",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING0a49bc00-3865-4b6b-9ddd-920098046a5e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab77a9518eTabLabelGridLayout17c28fe2"
					},
					"bindTo": "AMDEndYear",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout17c28fe2",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGroupb8f14d5c",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab77a9518eTabLabelGroupb8f14d5cGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab77a9518eTabLabel",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab77a9518eTabLabelGridLayout177e8d56",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab77a9518eTabLabelGroupb8f14d5c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME14cb0c11-0480-4603-8577-71756d3ef5bb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab77a9518eTabLabelGridLayout177e8d56"
					},
					"bindTo": "AMDExpiredDate",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout177e8d56",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGced325b2-c15a-4ca9-9aa8-bd06aaa34261",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayout177e8d56"
					},
					"bindTo": "AMDExpiredQuarter",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout177e8d56",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGa786b1df-95ae-4a6f-9c0b-716a39761689",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab77a9518eTabLabelGridLayout177e8d56"
					},
					"bindTo": "AMDExpiredYear",
					"enabled": true
				},
				"parentName": "Tab77a9518eTabLabelGridLayout177e8d56",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
					"order": 3
				}
			},
			{
				"operation": "insert",
				"name": "Tab3e7c9377TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 4
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "VisaDetailV26459c878",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab3e7c9377TabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
