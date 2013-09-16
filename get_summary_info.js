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
url: "https://api.enphaseenergy.com/api/systems/" + {!Monitor_Diagnostics__c.System_ID__c} + "/summary", 
data: {key: "YOUR_KEY_HERE"}, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 

success: function (parsed_json) { 
//Dividing by 1000 gets us from Watts to KWatts
var modules = parsed_json['modules']; 
var energy_lifetime = parsed_json['energy_lifetime']/1000; 
var energy_month = parsed_json['energy_month']/1000; 
var energy_week = parsed_json['energy_week']/1000; 
var energy_today = parsed_json['energy_today']/1000; 
var source = parsed_json['source']; 
var current_power = parsed_json['current_power']/1000; 
var summary_date = new Date(parsed_json['summary_date']); 

var DiagUpdate = new sforce.SObject("Monitor_Diagnostics__c"); 

DiagUpdate.Id = '{!Monitor_Diagnostics__c.Id}'; 
DiagUpdate.Modules__c = modules; 
DiagUpdate.Energy_Lifetime__c = energy_lifetime; 
DiagUpdate.Energy_Month__c = energy_month; 
DiagUpdate.Energy_Week__c = energy_week; 
DiagUpdate.Energy_Today__c = energy_today; 
DiagUpdate.Source__c = source; 
DiagUpdate.Current_Power__c = current_power; 
DiagUpdate.Summary_Date__c = summary_date; 

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