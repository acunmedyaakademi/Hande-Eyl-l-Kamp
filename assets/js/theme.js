const toggleButton = document.querySelector('#theme-btn');
const body = document.body

const userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
body.setAttribute("data-theme",userPreference);

function themeInit(){
    const savedTheme = localStorage.getItem("theme") || userPreference;
    body.setAttribute('data-theme',savedTheme);
    toggleButton.checked =savedTheme == "dark";
}

toggleButton.addEventListener('input',(e) => {
  const theme = e.target.checked ? "dark" : "light";
  body.setAttribute("data-theme", theme);
  localStorage.setItem('theme',theme);
})
themeInit();