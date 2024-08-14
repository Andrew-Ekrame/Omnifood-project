// Getting the year automatically for the footer

const current_year = new Date();
const year_element = document.querySelector(".year");
year_element.textContent = current_year.getFullYear();

// Making mobile navigation functional

const mobile_btn = document.querySelector(".btn-mobile-nav");
mobile_btn.addEventListener("click", function () {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
    body.style.overflowY = "auto";
    html.style.overflowY = "auto";
  } else {
    header.classList.add("nav-open");
    body.style.overflowY = "hidden";
    html.style.overflowY = "hidden";
  }
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
