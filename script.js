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
const d=new Date().toDateString();

document.getElementById('date').innerHTML=d;

const leftCmpTitle = document.getElementById("left-cmp-title");
const leftCmpContent = document.getElementById("left-cmp-content");
let currentIndex = 1;

function fetchAndPrintNewsData() {
  const sports=["football","cricket","basketball"]
  const randomNumber=Math.floor(Math.random()*3)
  const apiUrl =
    `https://newsdata.io/api/1/news?apikey=pub_27902cdb910ef47bedc67e18f7e4095c39342&category=sports&q=${sports[randomNumber]}&language=en`;

  // Fetch the data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Get the news articles array from the data
      console.log(data);
        leftCmpTitle.innerHTML = data.results[currentIndex].title;
        leftCmpContent.innerHTML = data.results[currentIndex].content;

        setInterval(() => {
          const item = data.results[currentIndex];
          leftCmpTitle.innerHTML = item.title;
          leftCmpContent.innerHTML = item.content;
        
          currentIndex = (currentIndex + 1) % data.results.length;
        }, 60000);
    })
    .catch((error) => {
      console.error("Error fetching news data:", error);
    });
}

const trendNewsTitle=document.getElementById('news1');
const trendNewsTitle1=document.getElementById('news2');
const trenNewsCategory=document.getElementById('sports1')
const trenNewsCategory1=document.getElementById('sports2')

// Call the fetchAndPrintNewsData function to print the news data in the console
fetchAndPrintNewsData();

const trendingNews= () => {
  const sports=["football","cricket","basketball"]
  const randomNumber=Math.floor(Math.random()*3)
  const apiUrl1=`https://newsdata.io/api/1/news?apikey=pub_27902cdb910ef47bedc67e18f7e4095c39342&category=sports&q=${sports[randomNumber]}&language=en`;
  fetch(apiUrl1)
    .then((response)=>response.json())
  .then((data)=> {
    trenNewsCategory.innerHTML=sports[randomNumber];
    trenNewsCategory1.innerHTML=sports[randomNumber];
    trendNewsTitle.innerHTML=data.results[0].title;
    trendNewsTitle1.innerHTML=data.results[1].title;
  })
}

trendingNews();


const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a9e00c72c7msh70ebe500b45edf9p17cda8jsn940d38f3caf4',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

async function fetchCricketMatches() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchCricketMatches();
