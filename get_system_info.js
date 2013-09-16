{!REQUIRESCRIPT("/soap/ajax/26.0/connection.js")} 
{!REQUIRESCRIPT("/soap/ajax/10.0/apex.js")} 
{!REQUIRESCRIPT("YOUR_STATIC_RESOURCE_FOR_JQUERY")} 

var interval; 

if (navigator.appVersion.indexOf("MSIE 9.0") !== -1) { 
alert("This button is not compatible with IE9\nPlease upgrade to IE10 or use Google Chrome or Mozilla Firefox"); 
} 


function appendScript() { 
interval = self.setInterval(function () { 

//Check to see if jQuery has loaded 
if (jQuery) { 

var enphase$ = jQuery.noConflict(); 

window.clearInterval(interval); 

enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/", 
data: {key: "YOUR_KEY_HERE"}, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 

success: function (parsed_json) { 
var total_systems = parsed_json['systems'].length; 
var new_system = {!Monitor_Diagnostics__c.System_ID__c}; 

var i =0; 
for (;i<total_systems;i++){ 
if (new_system == parsed_json['systems'][i]['system_id']){ 
break; 
}} 

var system_name = parsed_json['systems'][i]['system_name']; 
var status = parsed_json['systems'][i]['status']; 
var system_public_name = parsed_json['systems'][i]['system_public_name']; 
var city = parsed_json['systems'][i]['city']; 
var state = parsed_json['systems'][i]['state']; 
var postal_code = parsed_json['systems'][i]['postal_code']; 
var country = parsed_json['systems'][i]['country']; 
var timezone = parsed_json['systems'][i]['timezone']; 

var DiagUpdate = new sforce.SObject("Monitor_Diagnostics__c"); 

DiagUpdate.Id = '{!Monitor_Diagnostics__c.Id}'; 
DiagUpdate.Name = system_name; 
DiagUpdate.Status__c = status; 
DiagUpdate.System_Public_Name__c = system_public_name; 
DiagUpdate.City__c = city; 
DiagUpdate.State__c = state; 
DiagUpdate.Postal_Code__c = postal_code; 
DiagUpdate.Country__c = country; 
DiagUpdate.Timezone__c = timezone; 

updateDiag = sforce.connection.update([DiagUpdate]); 

if (updateDiag[0].getBoolean("success")) { 
window.location.reload(); 
} else { 
alert("Could not update alert fields."); 
} 

} 
}); 

} 
}, 300); 
} 
appendScript();