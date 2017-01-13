sap.ui.controller("filter.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf filter.Main
*/
	onInit: function() {

		
	
		    this.segButton = this.byId("segmented_IDDD");
		    this.segButton.setVisible(false);
		    this.JSOnModel = new sap.ui.model.json.JSONModel();
		    this.JSOnModel.loadData("json/Data.json", null, false);
		    this.table_Id = this.byId("tab_IDD");
		    this.table_Id.setModel(this.JSOnModel);
		    this.labelId = this.byId("label_IDD");
		    this.labelId.setText("Records(" + this.table_Id.getItems().length+ ")")
		
		
		
		
		
	
	},


	   // If you press Filter button then this event will fire.........
	   onFilter_Butt : function() {
	    if (!this.segButton.getVisible()) {
	     this.segButton.setVisible(true);
	     this.byId("toggle_ID").setText("Hide Filter");
	     this.segButton.setSelectedKey("kids");
	     this.Handle_Click_Segmented();
	    } else {
	     this.segButton.setVisible(false);
	     this.byId("toggle_ID").setText("Filter");
	     var bindallItems = this.table_Id.getBinding("items");
	     bindallItems.filter();
	     this.labelId.setText("Records("+ this.table_Id.getItems().length + ")");
	    }
	   },
	   
	   
	   
	   Handle_Click_Segmented : function() {
		    var key_Paramenter = this.segButton.getSelectedKey();
		    this.filterArry = [];
		    var filter = new sap.ui.model.Filter("recog",
		      sap.ui.model.FilterOperator.Contains, key_Paramenter);
		    this.filterArry.push(filter);
		    var bindallItems = this.table_Id.getBinding("items");
		    bindallItems.filter(this.filterArry);
		    this.labelId.setText("Records(" + this.table_Id.getItems().length+ ")")
		   },
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf filter.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf filter.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf filter.Main
*/
//	onExit: function() {
//
//	}

});