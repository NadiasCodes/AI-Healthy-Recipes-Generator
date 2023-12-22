function displayRecipes(response) {
  new Typewriter("#text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "57t510363ca64d76cf8d437ao0eea1eb";

  let context =
    "You are an expert AI nutritionist, who knows everything about the most healthy recipes especially with protein. Your mission is to generate all kind of healthy recipes especially with protein in basic HTML. Make sure to follow the user instructions below. Also always sign in the end by saying to enjoy their meal";
  let prompt = `User instructions are: Generate a healthy recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipes);
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
