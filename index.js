let icon = document.querySelector("#btn i");
icon.setAttribute("class", "fas fa-bars");

let toggle = document.getElementById("toggle");

function toggleDown() {
  toggle.className = "show-toggle";
  toggle.style.marginTop = "50px";
  icon.setAttribute("class", "fas fa-times");
  icon.setAttribute("onClick", "closeToggle()");
}

let close = document.getElementById("closeToggle");
function closeToggle() {
  toggle.className = "close-toggle";
  toggle.style.marginTop = "40px";
  icon.setAttribute("class", "fas fa-bars");
  icon.setAttribute("onClick", "toggleDown()");
}

icon.className === "fas fa-times"
  ? icon.setAttribute("onClick", "closeToggle()")
  : icon.setAttribute("onClick", "toggleDown()");