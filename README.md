salesforce-enphase
==================
The JS files in this repo are to be used with OnClick Javascript buttons in Salesforce. The custom object I use is called "Monitor Diagnostics" (Monitor_Diagnostics__c). 

Some prerequisites:
* JQuery as a Static Resource in your org
* API Key from Enphase

Everything for Enphase relies on the System ID field. 


List of fields needed per button as follows:

Get System Info:
+ Name
+ Status__c
+ System_Public_Name__c
+ City__c
+ State__c
+ Postal_Code__c
+ Country__c
+ Timezone__c

Get Summary Info:
+ Modules__c
+ Energy_Lifetime__c
+ Energy_Month__c
+ Energy_Week__c
+ Energy_Today__c
+ Source__c
+ Current_Power__c
+ Summary_Date__c

Get Envoy Info:
+ Envoy_ID__c
+ Last_Report_Date__c
+ Envoy_Name__c
+ Part_Number__c
+ Serial_Number__c
+ Envoy_Status__c

Get Production Info:
+ Production_Jan__c
+ Production_Feb__c
+ Production_Mar__c
+ Production_Apr__c
+ Production_May__c
+ Production_Jun__c
+ Production_Jul__c
+ Production_Aug__c
+ Production_Sep__c
+ Production_Oct__c
+ Production_Nov__c
+ Production_Dec__c