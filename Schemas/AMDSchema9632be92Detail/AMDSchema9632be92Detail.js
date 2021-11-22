define("AMDSchema9632be92Detail", ["ProcessModuleUtilities","ConfigurationGrid", "ConfigurationGridGenerator",
    "ConfigurationGridUtilities","css!SummaryModuleV2"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDRRTable",
		messages: {
			/**
			 * @message GetOrderProductSummary
			 * Returns information of product summary.
			 */
			/*
			///
			"GetOrderProductSummary": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			///
			*/
		},
		attributes: {
            // Determines whether the editing is enabled.
            "IsEditable": {
                // Data type — logic.
                dataValueType: Terrasoft.DataValueType.BOOLEAN,
                // Attribute type — virtual column of the view model.
                type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
                // Set value.
                value: true
            },
			"AMDButtonEnabled": {
				"dataValueType": Terrasoft.DataValueType.BOOLEAN,
				"value": true
			}
        },
        // Used mixins.
        mixins: {
            ConfigurationGridUtilities: "Terrasoft.ConfigurationGridUtilities"
        },
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			/*
			///
						{
				"operation": "insert",
				"name": "summaryItemsContainer",
				"propertyName": "tools",
				"parentName": "Detail",
				"values": {
					"id": "summaryItemContainer",
					"selectors": {"wrapEl": "#summaryItemContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["summary-item-container"],
					"visible": {"bindTo": "getSummaryVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "summaryCountCaption",
				"parentName": "summaryItemsContainer",
				"propertyName": "items",
				"values": {
					"caption": {"bindTo": "Resources.Strings.TotalCountCaption"},
					"itemType": Terrasoft.ViewItemType.LABEL,
					"classes": {"labelClass": ["summary-item-caption"]}
				}
			},
			{
				"operation": "insert",
				"name": "summaryCountValue",
				"parentName": "summaryItemsContainer",
				"propertyName": "items",
				"values": {
					"caption": {"bindTo": "TotalCount"},
					"markerValue": {"bindTo": "Resources.Strings.TotalCountCaption"},
					"itemType": Terrasoft.ViewItemType.LABEL,
					"classes": {"labelClass": ["summary-item-value"]}
				}
			},
			{
				"operation": "insert",
				"name": "summaryAmountCaption",
				"parentName": "summaryItemsContainer",
				"propertyName": "items",
				"values": {
					"caption": {"bindTo": "Resources.Strings.TotalAmountCaption"},
					"itemType": Terrasoft.ViewItemType.LABEL,
					"classes": {"labelClass": ["summary-item-caption"]}
				}
			},
			{
				"operation": "insert",
				"name": "summaryAmountCurrencySymbol",
				"parentName": "summaryItemsContainer",
				"propertyName": "items",
				"values": {
					"caption": {"bindTo": "CurrencySymbol"},
					"itemType": Terrasoft.ViewItemType.LABEL,
					"classes": {"labelClass": ["summary-item-value"]}
				}
			},
			{
				"operation": "insert",
				"name": "summaryAmountValue",
				"parentName": "summaryItemsContainer",
				"propertyName": "items",
				"values": {
					"caption": {
						bindTo: "TotalAmount",
						bindConfig: {converter: Terrasoft.getFormattedMoneyValue}
					},
					"markerValue": {"bindTo": "Resources.Strings.TotalAmountCaption"},
					"itemType": Terrasoft.ViewItemType.LABEL,
					"classes": {"labelClass": ["summary-item-value"]}
				}
			},
			///
			*/
			{
                // Operation type — merging.
                "operation": "merge",
                // Name of the schema element, with which the action is performed.
                "name": "DataGrid",
                // Object, whose properties will be joined with the schema element properties.
                "values": {
                    // Class name
                    "className": "Terrasoft.ConfigurationGrid",
                    // View generator must generate only part of view.
                    "generator": "ConfigurationGridGenerator.generatePartial",
                    // Binding the edit elements configuration obtaining event
                    // of the active page to handler method.
                    "generateControlsConfig": {"bindTo": "generateActiveRowControlsConfig"},
                    // Binding the active record changing event to handler method.
                    "changeRow": {"bindTo": "changeRow"},
                    // Binding the record selection cancellation event to handler method.
                    "unSelectRow": {"bindTo": "unSelectRow"},
                    // Binding of the list click event to handler method.
                    "onGridClick": {"bindTo": "onGridClick"},
                    // Actions performed with active record.
                    "activeRowActions": [
                        // [Save] action setup.
                        {
                            // Class name of the control element, with which the action is connected.
                            "className": "Terrasoft.Button",
                            // Display style — transparent button.
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            // Tag.
                            "tag": "save",
                            // Marker value.
                            "markerValue": "save",
                            // Binding button image.
                            "imageConfig": {"bindTo": "Resources.Images.SaveIcon"}
                        },
                        // [Cancel] action setup.
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "cancel",
                            "markerValue": "cancel",
                            "imageConfig": {"bindTo": "Resources.Images.CancelIcon"}
                        },
                        // [Delete] action setup.
                        {
                            "className": "Terrasoft.Button",
                            "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                            "tag": "remove",
                            "markerValue": "remove",
                            "imageConfig": {"bindTo": "Resources.Images.RemoveIcon"}
                        }
                    ],
                    // Binding to method that initializes subscription to events
                    // of clicking buttons in the active row.
                    "initActiveRowKeyMap": {"bindTo": "initActiveRowKeyMap"},
                    // Binding the active record action completion event to handler method.
                    "activeRowAction": {"bindTo": "onActiveRowAction"},
                    // Identifies whether multiple records can be selected.
                    "multiSelect": {"bindTo": "MultiSelect"}
                }
            },
			{
				"operation": "insert",
				"name": "AMDADDRRTABLE",
				"values": {
					"itemType": 5,
					"style": this.Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": {
						"bindTo": "Resources.Strings.AMDRRTableCaption"
					},
					"enabled": {"bindTo": "AMDButtonEnabled"},
					"click": {"bindTo": "addRRTable"}
					
				},
				"parentName": "Detail", 
				"propertyName": "tools"
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			addRRTable: function(){
					var primaryId = this.get("MasterRecordId");
				    console.log(primaryId);
					if (primaryId) {
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDAddRRTableDetails",
							parameters: {
								MarketingPlanID: primaryId
							}
						});

					}
			},
			/*
			///
			loadGridData: function() {
				this.callParent(arguments);
				this.updateSummary();
			},
			updateSummary: function() {
				var summary = this.sandbox.publish("GetOrderProductSummary", null, [this.sandbox.id]);
				this.set("TotalCount", summary.count || 0);
				this.set("CurrencySymbol", summary.currency);
				this.set("TotalAmount", summary.amount);
				this.set("SummaryLoaded", Boolean(summary.currency));
				console.log("in update");
			},
			///
			*/
		}
	};
});
