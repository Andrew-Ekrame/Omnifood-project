// Getting the year automatically for the footer

const current_year = new Date();
const year_element = document.querySelector(".year");
year_element.textContent = current_year.getFullYear();

// Making mobile navigation functional and closes when a nav link is clicked

const mobileBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const html = document.querySelector("html");
mobileBtn.addEventListener("click", function () {
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

const navLinks = document.querySelectorAll(".main-nav-link");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    }
  });
}

// solution of scroll problem in safari

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// implementing sticky navigation

const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);

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
