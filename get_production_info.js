{!REQUIRESCRIPT("/soap/ajax/26.0/connection.js")} 
{!REQUIRESCRIPT("/soap/ajax/10.0/apex.js")} 
{!REQUIRESCRIPT("YOUR_STATIC_RESOURCE_FOR_JQUERY")} 

function appendScript() { 
var enphase$ = jQuery.noConflict(); 

var months = new Array(12); 
var production = new Array(12); 

var year = new Date().getFullYear(); 
var current_month = new Date().getMonth(); 

var i = 0; 
for (; i < current_month; i++) { 
var month = String("0" + (i + 1)).slice(-2); 
months[i] = year + "-" + month + "-01"; 
} 

for (; i >= current_month && i < 12; i++) { 
var month = String("0" + (i + 1)).slice(-2); 
months[i] = (year - 1) + "-" + month + "-01"; 
} 
//Yes I know this is super lame making 12 separate AJAX calls... Making an array of AJAX calls wasn't working for me. It just works, pull requests welcome
function ajaxCall0(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[0],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[0] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall1(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[1],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[1] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall2(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[2],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[2] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall3(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[3],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[3] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall4(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[4],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[4] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall5(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[5],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[5] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall6(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[6],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[6] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall7(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[7],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[7] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall8(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[8],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[8] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall9(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[9],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[9] = parsed_json['production_wh']; 

} 
}); 
} 

function ajaxCall10(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[10],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[10] = parsed_json['production_wh']; 

} 
}); 
} 
function ajaxCall11(){ 
return enphase$.ajax({ 
url: "https://api.enphaseenergy.com/api/systems/{!Monitor_Diagnostics__c.System_ID__c}/monthly_production", 
data: {start: months[11],key: "YOUR_KEY_HERE"}, 
async: false, 
cache: true, 
type: "GET", 
dataType: "jsonp", 
contentType: "application/json; charset=utf-8", 
success: function (parsed_json) { 
production[11] = parsed_json['production_wh']; 

} 
}); 
} 

enphase$.when(ajaxCall0(),ajaxCall1(),ajaxCall2(),ajaxCall3(),ajaxCall4(),ajaxCall5(),ajaxCall6(),ajaxCall7(),ajaxCall8(),ajaxCall9(),ajaxCall10(),ajaxCall11()).done( 
function(alertValue) { 

var DiagUpdate = new sforce.SObject("Monitor_Diagnostics__c"); 
//Dividing by 1000 gets us from Watts to KWatts
DiagUpdate.Id = '{!Monitor_Diagnostics__c.Id}'; 
DiagUpdate.Production_Jan__c = production[0]; 
DiagUpdate.Production_Feb__c = production[1]/1000; 
DiagUpdate.Production_Mar__c = production[2]/1000; 
DiagUpdate.Production_Apr__c = production[3]/1000; 
DiagUpdate.Production_May__c = production[4]/1000; 
DiagUpdate.Production_Jun__c = production[5]/1000; 
DiagUpdate.Production_Jul__c = production[6]/1000; 
DiagUpdate.Production_Aug__c = production[7]/1000; 
DiagUpdate.Production_Sep__c = production[8]/1000; 
DiagUpdate.Production_Oct__c = production[9]/1000; 
DiagUpdate.Production_Nov__c = production[10]/1000; 
DiagUpdate.Production_Dec__c = production[11]/1000; 

updateDiag = sforce.connection.update([DiagUpdate]); 

if (updateDiag[0].getBoolean("success")) { 
window.location.reload(); 
} else { 
alert("Could not update alert fields."); 
} 
} 
); 
} 
appendScript();