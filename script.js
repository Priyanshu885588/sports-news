const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchBtn.style.borderBottom = "1px solid black";
});
let tf = false;
const hambtn = document
  .querySelector(".ham-btn")
  .addEventListener("click", () => {
    if (!tf) {
      document.getElementById("nav-items").style.display = "flex";
      tf = true;
    } else {
      document.getElementById("nav-items").style.display = "none";
      tf = false;
    }
  });

let th1 = false;

const darkBtn = document.querySelector(".theme-btn");
const menuBtns = document.getElementsByClassName('menu-btn');
darkBtn.addEventListener("click", () => {
  if (!th1) {
    darkBtn.classList.add("dbt");
    document.getElementById("search-btn").style.filter = "invert(100%)";
    document.getElementById("ham-btn").style.filter = "invert(100%)";
    for (const btn of menuBtns) {
      btn.style.filter = "invert(100%)";
    }
    th1 = true;
  } else {
    darkBtn.classList.remove("dbt");
    document.getElementById("search-btn").style.removeProperty("filter");
    document.getElementById("ham-btn").style.removeProperty("filter");
    for (const btn of menuBtns) {
      btn.style.removeProperty("filter");
    }
    th1 = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const darkBtn = document.querySelector(".theme-btn");
  darkBtn.addEventListener("click", () => {
    // Toggle the theme by changing the CSS variables

    // Get the current color values
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-color")
      .trim();
    const backColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--back-color")
      .trim();
    const primaryColorLight = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-color-light")
      .trim();

    // Set new color values based on the current theme
    if (primaryColor === "rgb(255, 255, 255)") {
      document.documentElement.style.setProperty("--primary-color", "black");
      document.documentElement.style.setProperty("--back-color", "#ddd9d8");
      document.documentElement.style.setProperty(
        "--primary-color-light",
        "rgba(0, 0, 0, 0.28)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty("--back-color", "#000000");
      document.documentElement.style.setProperty(
        "--primary-color-light",
        "rgba(255, 255, 255, 0.28)"
      );
    }
  });
});
