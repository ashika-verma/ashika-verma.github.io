const style = getComputedStyle(document.body);
var colors = [
  style.getPropertyValue("--third-color"),
  style.getPropertyValue("--fourth-color"),
  style.getPropertyValue("--fifth-color"),
  style.getPropertyValue("--highlight-color"),
];

const defaultTheme = [
  "#000",
  "#96979c",
  "#fff",
  "#eb4888",
  "#e9bc3f",
  "#24d05a",
  "#10a2f5",
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
    <a target="_blank" href="./files/Ashika.Verma.6.2021.pdf">resume</a>
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
  document.getElementById("propic").src = `./img/face${num}.jpg`;
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach((e) => {
    e.classList.remove("show");
  });
}

function setTheme(
  headerColor,
  subHeaderColor,
  backgroundColor,
  highlightColor,
  funColor1,
  funColor2,
  funColor3
) {
  document.documentElement.style.setProperty("--header-color", headerColor);
  document.documentElement.style.setProperty(
    "--subheader-color",
    subHeaderColor
  );
  document.documentElement.style.setProperty(
    "--background-color",
    backgroundColor
  );
  document.documentElement.style.setProperty(
    "--highlight-color",
    highlightColor
  );
  document.documentElement.style.setProperty("--third-color", funColor1);
  document.documentElement.style.setProperty("--fourth-color", funColor2);
  document.documentElement.style.setProperty("--fifth-color", funColor3);

  colors = [highlightColor, funColor1, funColor2, funColor3];
  setRandomLinkColor();
}
