let clickerElement = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

let element = parseInt(clickerElement.textContent);

function clicker() {
  element++;
  clickerElement.textContent = element;
  console.log(element);

  if (element % 2 === 0) {
    cookie.width = 200;
    cookie.height = 150;
  } else {
    cookie.width = 250;
    cookie.height = 200;
  }
};


cookie.onclick = clicker;