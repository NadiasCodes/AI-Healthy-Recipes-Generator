function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#text");
  new Typewriter("#text", {
    strings: ["Recipes"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("christmas")) {
    body.classList.remove("christmas");
  } else {
    body.classList.add("christmas");
  }
  let header = document.querySelector("h1");
  header.innerHTML = "Merry Christmas My Love";
  if (h1.classList.contains("christmas")) {
    h1.classList.remove("christmas");
  } else {
    h1.classList.add("christmas");
  }
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

let themeButton = document.querySelector(".surprise-button");
themeButton.addEventListener("click", changeTheme);
