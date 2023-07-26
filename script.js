const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
const darkBtn = document.querySelector(".theme-btn");
const menuBtns = document.getElementsByClassName("menu-btn");

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

const themeChange = () => {
  const currentTheme = localStorage.getItem("theme");
  console.log(currentTheme);
  if (currentTheme === "dark") {
    document.documentElement.style.setProperty(
      "--primary-color",
      "rgb(255, 255, 255)"
    );
    document.documentElement.style.setProperty("--back-color", "#000000");
    document.documentElement.style.setProperty(
      "--primary-color-light",
      "rgba(255, 255, 255, 0.28)"
    );
    darkBtn.classList.add("dbt");
    document.getElementById("search-btn").style.filter = "invert(100%)";
    document.getElementById("ham-btn").style.filter = "invert(100%)";
    for (const btn of menuBtns) {
      btn.style.filter = "invert(100%)";
    }
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.style.setProperty("--primary-color", "black");
    document.documentElement.style.setProperty("--back-color", "#ddd9d8");
    document.documentElement.style.setProperty(
      "--primary-color-light",
      "rgba(0, 0, 0, 0.28)"
    );
    darkBtn.classList.remove("dbt");
    document.getElementById("search-btn").style.removeProperty("filter");
    document.getElementById("ham-btn").style.removeProperty("filter");
    for (const btn of menuBtns) {
      btn.style.removeProperty("filter");
    }
    localStorage.setItem("theme", "light");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  themeChange();
  const dark2Btn = document.querySelector(".theme-btn");
  dark2Btn.addEventListener("click", () => {
    // Toggle the theme by changing the CSS variables

    // Set new color values based on the current theme
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");

      themeChange();
    } else {
      localStorage.setItem("theme", "light");

      themeChange();
    }
  });
});

document.querySelector(".subscribe-btn").addEventListener("click", () => {
  window.location.href = "login/login.html";
});
