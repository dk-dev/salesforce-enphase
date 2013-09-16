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
url: "https://api.enphaseenergy.com/api/systems/" + {!Monitor_Diagnostics__c.System_ID__c} + "/envoys", 
data: {key: "YOUR_KEY_HERE"}, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 

success: function (parsed_json) { 

var envoy_id = parsed_json['envoys'][0]['envoy_id']; 
var last_report_date = new Date(parsed_json['envoys'][0]['last_report_date']); 
var name = parsed_json['envoys'][0]['name']; 
var part_number = parsed_json['envoys'][0]['part_number']; 
var serial_number = parsed_json['envoys'][0]['serial_number']; 
var status = parsed_json['envoys'][0]['status']; 

var DiagUpdate = new sforce.SObject("Monitor_Diagnostics__c"); 

DiagUpdate.Id = '{!Monitor_Diagnostics__c.Id}'; 
DiagUpdate.Envoy_ID__c = envoy_id; 
DiagUpdate.Last_Report_Date__c = last_report_date; 
DiagUpdate.Envoy_Name__c = name; 
DiagUpdate.Part_Number__c = part_number; 
DiagUpdate.Serial_Number__c = serial_number; 
DiagUpdate.Envoy_Status__c = status; 

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