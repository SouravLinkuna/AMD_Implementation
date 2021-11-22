define("AMDSchemad9f7a46cDetail", [], function() {
	return {
		entitySchemaName: "AMDRequestRegionalBudgetDetail",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
			/*getAddRecordButtonVisible: function() {
				var parameter=this.get("MasterRecordId");
				var parameter2="";
				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
 				rootSchemaName: "AMDRegionalBudget"
				});
				esq.addColumn("Id","regionalID");
				console.log("debug1");
				esq.getEntity(parameter, function(result){
				if (!result.success) {
				 // error processing/logging, for example
				console.log("Data query error");
 				return true;
 				}
				console.log("debug2");
				parameter2=result.entity.get("regionalID");
				console.log("Parameter2",parameter2);
				if(parameter==parameter2){return false;}
				else{return true;}
				//this.showInformationDialog(result.entity.get("regionalID"));
				}, this);
				var parameter1=this.entitySchemaName;
				console.log(parameter);
				console.log(parameter1);
               // return true;
            }*/
		}
	};
});
