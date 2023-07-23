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
      tf=true;
    }
    else {
        document.getElementById("nav-items").style.display = "none";
        tf=false;
    }

  });
