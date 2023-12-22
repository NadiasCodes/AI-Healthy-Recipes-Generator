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

let themeButton = document.querySelector(".surprise-button");
themeButton.addEventListener("click", changeTheme);

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement;

