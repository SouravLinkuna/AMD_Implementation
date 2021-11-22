define("AMDRegionalBudget89b3a483Section", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AMDRegionalBudget",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AMDAllocateL1FundstoL2_Section",
				"values": {
					"style": "green",
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AMDAllocateL1FundstoL2Section"
					},
					"enabled": {"bindTo": "balancenotzero"},
					"click": {"bindTo": "runProcess"},
					"layout": {
						"column": 1,
						"row": 6,
						"colSpan": 1
					},
					
				},
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items"
				//"index": 7
			},
		]/**SCHEMA_DIFF*/,
		methods: {
			runProcess: function(){
					var activeRowId = this.get("ActiveRow");
					if (activeRowId) {
						ProcessModuleUtilities.executeProcess({
							sysProcessName: "AMDProcess_AllocateAllL1fundstoL2",
							parameters: {
								RecordId: activeRowId
							}
						});

					}
			},
			balancenotzero: function(){
				var activeRowId = this.get("ActiveRow");

				/*if(activeRowId)
				{	
					var collection = this.get("GridData").get(activeRowId).get("AMDBalance");
					console.log("Balance" + balance);
					return (balance != 0) ? true : false;
				}*/

				return true;
			}
			
		}
	};
});
