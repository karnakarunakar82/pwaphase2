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

var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}
}
var parent=document.querySelector(".parent")

function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="image/Resume.jpg";
    image.alt=d[i].name;

    var link=document.createElement("a");
    link.classList.add("link");
    link.herf="resume.html";
    // child.append(link);
    var name=document.createElement("h3");
    name.textContent=d[i].name;
    link.href="resume.html?id="+d[i].id;
    link.textContent="view profile";
child.append(name);
child.append(image);

        child.append(link);
    parent.append(child);

  }
}
