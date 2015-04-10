var $_ = null;
var wLib = function() {
 this.targetElement = null;
}

/* HTML styling */

wLib.prototype.ID = function(id) {
 this.targetElement = document.getElementbyId(id);
}

wLib.prototype.bold = function() {
 this.targetElement.innerHTML = "<strong>" + this.targetElement.innerHTML + "</strong>";
}

wLib.prototype.italic = function() {
 this.targetElement.innerHTML = "<em>" + this.targetElement.innerHTML + "</em>";
}

wLib.prototype.underline = function() {
 this.targetElement.innerHTML = "<u>" + this.targetElement.innerHTML + "</u>";
}

wLib.prototype.strike = function() {
 this.targetElement.innerHTML = "<s>" + this.targetElement.innerHTML + "</s>";
}

/* Utils */

wLib.prototype.newVar = function(name, val) {
 var name = val;
}

wLib.prototype.log = function(val) {
 console.log(val);
}

wLib.prototype.now = function() {
 Date.now();
}

/* Arrays */

wLib.prototype.isArray = function(arr) {
 Array.isArray(arr);
}

wLib.prototype.push = function(val, arr) {
 arr.push(val);
}

wLib.prototype.pop = function(arr) {
 arr.pop();
}

/* Audio */

wLib.prototype.audio = function(audio) {
 newaudio = new Audio(audio);
 return new play();
 function play() {
  newaudio.play;
 }
}

var Wrap = function(id) {
 Wrap.prototype = wLib.prototype;
 Wrap.fn = wLib.prototype;
 var obj = new wLib();
 obj.ID(id);
 return obj;
}

$_ = Wrap;
