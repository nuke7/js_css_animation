function pageLoaded() {
  let root = document.querySelector("#root");

  let myObjects = [
    {
      tag: "h1",
      content: "Marton Gombos",
    },
    {
      tag: "p",
      content: "FrontEnd Developer",
    },
  ];

  for (myObject of myObjects) {
    root.insertAdjacentHTML(
      "beforeend",
      `<${myObject.tag}> ${myObject.content} </${myObject.tag}>`
    );
  }

  root.addEventListener("mouseover", function () {
    root.classList.toggle("clicked");
  });
}

window.addEventListener("load", pageLoaded);
