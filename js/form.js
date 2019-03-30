function submitData(){
var career=document.querySelector("#career").value;
var name=document.querySelector("#name").value;
var mobileno=document.querySelector("#mobileno").value;
var email=document.querySelector("#email").value;
var address=document.querySelector("#address").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gyop=document.querySelector("#gyop").value;
var gbranch=document.querySelector("#gbranch").value;
var gpercentage=document.querySelector("#gpercentage").value;
var iinstitute=document.querySelector("#iinstitute").value;
var iyop=document.querySelector("#iyop").value;
var ibranch=document.querySelector("#ibranch").value;
var ipercentage=document.querySelector("#ipercentage").value;
var sinstitute=document.querySelector("#sinstitute").value;
var syop=document.querySelector("#syop").value;
var sbranch=document.querySelector("#sbranch").value;
var spercentage=document.querySelector("#spercentage").value;
var skills=document.querySelector("#skills").value;

var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if (!idb in window) {
  console.log("indexedDB is not supported");


}
// indexedDBCreation
var request;
var store;

var open=idb.open("storeData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function(e){
  var request=e.target.result;
  var store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("storeData is created");
}
open.onerror=function(error){
  console.log("Error is created");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
store.put({
  career:career,
  name:name,
   mobileno:mobileno,
  email:email,
 address:address,
education:[
  {
  institute:ginstitute,
    yop:gyop,
    branch:gbranch,
      percentage:gpercentage,

},
{
  institute:iinstitute,
  yop:iyop,
  branch:ibranch,
  percentage:ipercentage
},
{
  institute:sinstitute,
  yop:syop,
  branch:sbranch,
 percentage:spercentage
}
],
skills:skills

});





}


window.open("index.html")



}
