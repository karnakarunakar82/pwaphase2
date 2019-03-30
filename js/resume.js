var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para =query[i].split("=");
  paravalue=parseInt(para[1]);
}
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
 var info=store.get(paravalue);
info.onsuccess=function(data) {
  console.log(data);
Career(data.target.result);
  personalinfo(data.target.result);

// education(data.target.result);
}
}
var left = document.querySelector(".left");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="image/r2.svg";
  image.alt=pi.name;
  left.append(image);
  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);
  var Mn=document.createElement("h2");
  Mn.textContent=pi.mobileno;
  left.append(Mn);
  var em=document.createElement("h2");
  em.textContent=pi.email;
  left.append(em);
  var add=document.createElement("h2");
  add.textContent=pi.address;
  left.append(add);
}

  var right=document.querySelector(".right");
  function Career(ka){
    var h1=document.createElement("h2");
    h1.textContent="career Objective";
    right.append(h1);

   var hr=document.createElement("hr");
   right.append(hr);
  var info=document.createElement("h5");
info.textContent=ka.career;
  right.append(info);


  // var right=document.querySelector(".right");
  // var right=document.querySelector(".right");
  // function education(ED){
  var h1=document.createElement("h2");
  h1.textContent="Educational Deatils";
  right.append(h1);

  // var h2=document.createElement("hr");
  // right.append(h2);
  //
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>Institution</th><th>yop</th><th>branch</th><th>percentage</th></tr>";
  var tr2="";
  for(var i in ka.education){
  tr2=tr2+"<tr><td>"+ka.education[i].institute+"</td><td>"+ka.education[i].yop+"</td><td>"+ka.education[i].branch+"</td><td>"+ka.education[i].percentage+"</td></tr>";
}
  table.innerHTML=tr1+tr2;
  right.append(table);
  // var i=document.createElement("h2");
  // i.textContent=pi.institute;
  //  left.append(i);
  var h1=document.createElement("h2");
  h1.textContent="Skills";
  right.append(h1);

 var hr=document.createElement("hr");
 right.append(hr);
var info=document.createElement("h5");
info.textContent=ka.skills;
right.append(info);


}
