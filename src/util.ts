export const range = (n: number) => Array.from(Array(n).keys());

/* Colors */
const bodyStyle = getComputedStyle(document.body);
let colors: string[] = [
  bodyStyle.getPropertyValue("--third-color"),
  bodyStyle.getPropertyValue("--fourth-color"),
  bodyStyle.getPropertyValue("--fifth-color"),
  bodyStyle.getPropertyValue("--highlight-color"),
];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function setFunColors(
  headerColor: string,
  highlightColor: string,
  funColor1: string,
  funColor2: string,
  funColor3: string,
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
  //   sessionStorage.setItem("color-palette", [
  //     headerColor,
  //     highlightColor,
  //     funColor1,
  //     funColor2,
  //     funColor3,
  //   ]);
  setRandomLinkColor();
}
export function generateRandomColor() {
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

(function () {
  // populateMenu();
  // setMode();
  // setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  // setBioEventListener();
  // setRandomPhoto();
  // requestRepoInfo();

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();
