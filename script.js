const gray = "#96979c";
const emojiList = [`🤏`, `🍕`, `🌯`, `🥭`, `🍪`, `🌮`];
var diceCount = 0;

const style = getComputedStyle(document.body);
var colors = [
  style.getPropertyValue("--third-color"),
  style.getPropertyValue("--fourth-color"),
  style.getPropertyValue("--fifth-color"),
  style.getPropertyValue("--highlight-color"),
];

const defaultTheme = [
  "#000", // header
  "#96979c", // subheader
  "#fff", // background color
  "#eb4888", // highlight color
  "#e9bc3f", // fun color 1
  "#24d05a", // fun color 2
  "#10a2f5", // fun color 3
];
const academiaTheme = [
  "#3d405b",
  "#96979c",
  "#fff",
  "#f2cc8f",
  "#81b29a",
  "#3d405b",
  "#e07a5f",
];

const numProfilePics = 9;

(function () {
  populateMenu();
  setMode();
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();
  setRandomPhoto();
  requestRepoInfo();

  setInterval(() => {
    setRandomPhoto();
  }, 2500);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

function populateMenu() {
  menuHtml = `
    <a href="./index.html">home</a>
    <a href="./projects.html">projects</a>
    <a href="./classes.html">classes</a>
    <a target="_blank" href="./files/Ashika_Verma_Resume_11_12_2023.pdf">resume</a>
    <a target="_blank" href="https://github.com/ashika-verma">github</a>
    <a target="_blank" href="https://www.linkedin.com/in/ashika-verma/">linkedin</a>
  `;
  document.getElementById("links").innerHTML = menuHtml;
}

function setMode() {
  const theme = localStorage.getItem("theme");
  let list = document.body.classList;
  if (theme === "dark-mode") {
    document.getElementById("toggler").checked = true;
    list.add("dark-mode");
  }
  const palette = sessionStorage.getItem("color-palette");
  if (palette) setFunColors(...palette.split(","));
}

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    if (event.target.checked) {
      list.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.setItem("theme", "light-mode");
      list.remove("dark-mode");
    }
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */

function setRandomPhoto() {
  let num = Math.floor(Math.random() * numProfilePics) + 1;
  if (document.getElementById("propic"))
    document.getElementById("propic").src = `./img/face${num}.jpg`;
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByClassName("biotoggler")).forEach((e) => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  e.target.classList.add("show");
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function randomBioToggleColor() {
  Array.from(document.getElementsByClassName("biotoggler")).forEach((e) => {
    if (e.classList.contains("show")) {
      let color = getRandomColor();
      e.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
    } else {
      e.style.cssText = `border-color: ${gray}; color: ${gray}; font-weight: bold;`;
    }
  });
}

function off(bioType) {
  Array.from(document.getElementsByClassName("biotoggler")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
    butt.classList.remove("show");
  });
  Array.from(document.getElementsByClassName("bio")).forEach((e) => {
    e.classList.remove("show");
  });
}

function setFullTheme(
  headerColor,
  subHeaderColor,
  backgroundColor,
  highlightColor,
  funColor1,
  funColor2,
  funColor3
) {
  document.documentElement.style.setProperty(
    "--subheader-color",
    subHeaderColor
  );
  document.documentElement.style.setProperty(
    "--background-color",
    backgroundColor
  );
  document.documentElement.style.setProperty("--fifth-color", funColor3);
  setFunColors(
    headerColor,
    highlightColor,
    funColor1,
    funColor2,
    funColor3,
    false
  );
}

function setFunColors(
  headerColor,
  highlightColor,
  funColor1,
  funColor2,
  funColor3,
  includeSubheader = true
) {
  document.documentElement.style.setProperty("--header-color", headerColor);
  document.documentElement.style.setProperty(
    "--highlight-color",
    highlightColor
  );
  document.documentElement.style.setProperty("--third-color", funColor1);
  document.documentElement.style.setProperty("--fourth-color", funColor2);
  document.documentElement.style.setProperty("--fifth-color", funColor3);

  if (includeSubheader) {
    document.documentElement.style.setProperty(
      "--subheader-color",
      highlightColor
    );
  }

  colors = [highlightColor, funColor1, funColor2, funColor3];
  sessionStorage.setItem("color-palette", [
    headerColor,
    highlightColor,
    funColor1,
    funColor2,
    funColor3,
  ]);
  setRandomLinkColor();
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgbArray) {
  return (
    "#" +
    componentToHex(rgbArray[0]) +
    componentToHex(rgbArray[1]) +
    componentToHex(rgbArray[2])
  );
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

function rollTheDice() {
  let filledArray = [...new Array(5)].map(() => generateRandomColor());
  setFunColors(...filledArray);
  randomBioToggleColor();

  diceCount++;
  if (diceCount > 4) {
    var emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    document.body.style[
      "cursor"
    ] = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='50' viewport='0 0 50 50' style='fill:black;font-size:24px;'><text y='50%'>${emoji}</text></svg>")
  16 0,
auto`;
  }
}

function requestRepoInfo() {
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/repos/ashika-verma/ashika-verma.github.io/branches/main`;
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    const dateEdited = new Date(data.commit.commit.author.date);
    document.getElementById("last-edited").textContent = `${
      dateEdited.getMonth() + 1
    }/${dateEdited.getDate()}/${dateEdited.getFullYear() - 2000}`;
  };

  xhr.send();
}

const toggleIdVisibility = (id) => {
  document.getElementById(id).style["display"] =
    document.getElementById(id).style["display"] === "block" ? "none" : "block";
};

// -----------------------  KONAMI CODE ---------------------------

var pattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
var index = 0;
document.addEventListener("keydown", function onEvent(event) {
  if (event.key === pattern[index]) {
    index++;
    if (index === pattern.length) {
      index = 0;
      konami();
    }
  } else {
    index = 0;
  }
});

function konami() {
  alert("hello!");
}

function openURL(url) {
  window.open(url, "_blank");
}
