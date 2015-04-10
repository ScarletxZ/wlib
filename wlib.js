var $ = null;
var MyJavaScriptLibrary = function () {
    this.targetElement = null;
}
MyJavaScriptLibrary.prototype.Init = function (id) {
    this.targetElement = document.getElementById(id);
}

MyJavaScriptLibrary.prototype.MakeBold = function () {
    this.targetElement.innerHTML = "<strong>" + this.targetElement.innerHTML + "</strong>";
}

MyJavaScriptLibrary.prototype.MakeItalic = function () {
    this.targetElement.innerHTML = "<em>" + this.targetElement.innerHTML + "</em>";
}
var Wrapper = function (id) {
    Wrapper.prototype = MyJavaScriptLibrary.prototype;
    Wrapper.fn = MyJavaScriptLibrary.prototype;
    var obj = new MyJavaScriptLibrary();
    obj.Init(id);
    return obj;
}
$ = Wrapper;
