"use strict";

function pageLoaded() {
  var root = document.querySelector("#root");
  var body = document.querySelector("body");
  var myObjects = [{
    tag: "h1",
    content: "Marton Gombos"
  }, {
    tag: "p",
    content: "FrontEnd Developer"
  }];

  for (var _i = 0, _myObjects = myObjects; _i < _myObjects.length; _i++) {
    myObject = _myObjects[_i];
    root.insertAdjacentHTML("beforeend", "<".concat(myObject.tag, "> ").concat(myObject.content, " </").concat(myObject.tag, ">"));
  }

  window.addEventListener("click", function () {
    root.classList.toggle("clicked");
  });
}

window.addEventListener("load", pageLoaded);