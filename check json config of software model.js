var software_item = GlideRecord('cmdb_software_product_model');
software_item.addQuery("u_available_for_catalog", "Yes");
software_item.query();
var count = 0;


gs.info("Records in incident table: " + software_item.getRowCount());
while (software_item.next()) {
	gs.log("count = " + count + " = " + software_item.name)
	 
	//gs.log("Software = " + software_item.name);
	//gs.log("JSON = " + software_item.u_software_json);
	
	// Input sting
	var str = software_item.u_software_json;
	//var str = '{ "prop_1": "val_1", "prop_2": "val_2" }';
	
	var obj = JSON.parse(str);
	
	//gs.log(obj);
	gs.log(obj);
	count = count+1;
}