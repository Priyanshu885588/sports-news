const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
    searchInput.style.display = "block";
    searchBtn.style.borderBottom="1px solid black"
});
