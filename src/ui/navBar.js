const navContainer = document.querySelector("#navContainer");
let nav = document.createElement("nav");
nav.classList = "flex gap-3 justify-center flex-wrap";
const s1 = document.createElement("a");
const s2 = document.createElement("a");
const s3 = document.createElement("a");
const s4 = document.createElement("a");
const sections = [s1, s2, s3, s4];

// Define color for each section
const sectionColors = [
  "theme-accent-primary",
  "theme-accent-secondary",
  "theme-accent-tertiary",
  "theme-accent-quaternary",
];

function setActive(event) {
  sections.forEach((section, index) => {
    const color = sectionColors[index];
    section.classList.remove("bg-theme-surface-0", "active");
    section.classList.remove(`text-${color}`, `border-${color}`);
    section.classList.add("text-theme-text-secondary", "border-theme-border");
  });

  const targetIndex = sections.indexOf(event.target);
  const targetColor = sectionColors[targetIndex];

  event.target.classList.remove(
    "text-theme-text-secondary",
    "border-theme-border",
  );
  event.target.classList.add(
    "bg-theme-surface-0",
    "active",
    `text-${targetColor}`,
    `border-${targetColor}`,
  );
}

s1.innerText = "Number Converter";
s2.innerText = "ASCII Art Generator";
s3.innerText = "Binary File Parser";
s4.innerText = "Data Encoding System";

const baseStyle =
  "font-medium text-sm px-4 py-2 rounded-lg duration-300 transition-all cursor-pointer text-center border-2 hover:bg-theme-surface-0/50";

// Apply initial styles with individual colors
s1.classList =
  baseStyle +
  " bg-theme-surface-0 text-theme-accent-primary active border-theme-accent-primary";
s2.classList =
  baseStyle +
  " text-theme-text-secondary border-theme-border hover:text-theme-accent-secondary hover:border-theme-accent-secondary/50";
s3.classList =
  baseStyle +
  " text-theme-text-secondary border-theme-border hover:text-theme-accent-tertiary hover:border-theme-accent-tertiary/50";
s4.classList =
  baseStyle +
  " text-theme-text-secondary border-theme-border hover:text-theme-accent-quaternary hover:border-theme-accent-quaternary/50";

sections.forEach((e, index) => {
  e.addEventListener("click", async (event) => {
    setActive(event);

    if (index === 0) {
      const { numberConverter } = await import("./modules/numberConverter.js");
      numberConverter();
    }
    if (index === 1) {
      const { asciiArtGenerator } = await import(
        "./modules/asciiArtGenerator.js"
      );
      asciiArtGenerator();
    }
    if (index === 2) {
      const { binaryFileParser } = await import(
        "./modules/binaryFileParser.js"
      );
      binaryFileParser();
    }
    if (index === 3) {
      const { dataEncodingSystem } = await import(
        "./modules/dataEncodingSystem.js"
      );
      dataEncodingSystem();
    }
  });
});
nav.appendChild(s1);
nav.appendChild(s2);
nav.appendChild(s3);
nav.appendChild(s4);

export const setNav = () => {
  navContainer.appendChild(nav);
};
