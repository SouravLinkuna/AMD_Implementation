define("AMDSchemac66c1ad9Detail", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDMarketingPlans",
		attributes: {
			"AMDButtonEnabled": {
				"dataValueType": Terrasoft.DataValueType.BOOLEAN,
				"value": true
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDReviseButton",
				"values": {
					"itemType": 5,
					"style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"caption": {
						"bindTo": "Resources.Strings.AMDReviseButtonCaption"
					},
					"enabled": {"bindTo": "AMDButtonEnabled"},
					"click": {
						"bindTo": "runCustomProcess"
					},
					//"click": {"bindTo": "runProcessButton"}
					
				},
				"parentName": "Detail", 
				"propertyName": "tools"
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			runCustomProcess: function(){
					var primaryId = this.get("ActiveRow");
					if (primaryId) {
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDProcess_ReviseButton",
							parameters: {
								ParentRecordID: primaryId
							}
						});

					}
			}
		}
	};
});
