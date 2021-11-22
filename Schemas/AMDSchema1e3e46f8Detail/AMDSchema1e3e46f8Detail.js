define("AMDSchema1e3e46f8Detail", [], function() {
	return {
		entitySchemaName: "AMDClaims",
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
				"name": "AMDCreateClaimsButton",
				"values": {
					"itemType": 5,
					"style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"caption": {
						"bindTo": "Resources.Strings.AMDCreateClaimsButtonCaption"
					},
					"enabled": {"bindTo": "AMDButtonEnabled"},
					//"click": {"bindTo": "runProcessButton"}
					
				},
				"parentName": "Detail", 
				"propertyName": "tools"
			}
		]/**SCHEMA_DIFF*/,
		methods: {}
	};
});
