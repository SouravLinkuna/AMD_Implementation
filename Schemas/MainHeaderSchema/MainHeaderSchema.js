  define("MainHeaderSchema", ["NetworkUtilities"], function(NetworkUtilities) {
	return {
		attributes: {},
		methods: {
			init: function() {
				this.callParent(arguments);
				this.Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onMessageReceived, this);
			},
			destroy: function() {
				this.Terrasoft.ServerChannel.un(Terrasoft.EventName.ON_MESSAGE, this.onMessageReceived, this);
				this.callParent(arguments);
			},
			onMessageReceived: function(sender, message) {
				if (message && message.Header) {
					var result = this.Ext.decode(message.Body);
					if (result && message.Header.Sender === "JFLOpenPage" && result.JFLContact === Terrasoft.SysValue.CURRENT_USER_CONTACT.value) {
						this.openEditPageInChain(result);
					}
				}
			},
			openEditPageInChain: function(params) {
				var trysCount = this.get("GlbTrysCount") || 0;
				if (trysCount >= 50) {
					this.set("GlbTrysCount", 0);
					return;
				}
				if (this.isProcessMode()) {
					this.set("GlbTrysCount", trysCount + 1);
					Ext.defer(this.openEditPageInChain.bind(this, params), 100);
					return;
				}
				this.set("GlbTrysCount", 0);
				var schemaName = params.JFLSchema;
				var recordId = params.JFLRecordId;
				var historyState = this.sandbox.publish("GetHistoryState");
				var config = {
					sandbox: this.sandbox,
					entitySchemaName: schemaName,
					primaryColumnValue: recordId,
					operation: Terrasoft.ConfigurationEnums.CardOperation.EDIT,
					historyState: historyState
				};
				if (recordId && !Terrasoft.isEmptyGUID(recordId)) {
					NetworkUtilities.openEntityPage(config);
				}
			},
			isProcessMode: function() {
				var currentState = this.sandbox.publish("GetHistoryState") || {};
				var hash = currentState.state || {};
				var hashHistoryState = hash.moduleId || "";
				return (!Ext.isEmpty(hashHistoryState.match("ProcessCardModuleV2/?")));
			}
		},
		diff: []
	};
});


