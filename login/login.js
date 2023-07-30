
document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      document.documentElement.style.setProperty("--primary-color", "black");
      document.documentElement.style.setProperty("--back-color", "#ddd9d8");
      document.documentElement.style.setProperty(
        "--primary-color-light",
        "rgba(0, 0, 0, 0.28)"
      );
      localStorage.setItem("theme", "light");
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
      localStorage.setItem("theme", "dark");
    }
});


var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "⇕";
        check++;
    }
    else
    {
        cta.innerHTML = "⇕";
        check = 0;
    }
})


