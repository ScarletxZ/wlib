/* wlib001.js, ver. 0.0.3 */
window.wlib = (function() {
 function Wlib (elem) {
 for(var i=0;i<elem.length;i++) {
  this[i] = elem[i];
 }
 this.length = elem.length;
 }
 
 var wlib = { 
  cookie: function() {
   var setCookie = function(name,value,expires,path) {
    document.cookie(name,value,expires,path);
   }
   var getCookie = function(name) {
    return document.cookie(name);
   }
   var eraseCookie = function(name) {
    setCookie(name,null,'Thu 01 Jan 1970 GMT 12:00:00','/');
   }
  }
  get: function(selector) {
   var elem;
   if(typeof selector === "string") {
    elem = document.querySelectorAll(selector);
   }else if (selector.length) {
    elem = selector;
   }else{
    els = [selector];
   }
   return new Wlib(elem);
  }
  mjson: function() {
   var json = function() {
    new Object;
   };
   var string = function(val) {
    JSON.stringify(val);
   };
   var parse = function(vals) {
    JSON.parse(vals);
   };
  }
  };
  
return wlib;

}();
