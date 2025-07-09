const navContainer = document.querySelector("#navContainer");
let nav = document.createElement("nav");
nav.classList = "flex gap-4 justify-center";
const s1 = document.createElement("a");
const s2 = document.createElement("a");
const s3 = document.createElement("a");
const s4 = document.createElement("a");
const sections = [s1, s2, s3, s4];

function setActive(event) {
  sections.forEach((a) =>
    a.classList.remove("bg-surface0", "text-lavander", "active"),
  );
  event.target.classList.add("bg-surface0", "text-lavander", "active");
}

s1.innerText = "Number Converter";
s2.innerText = "ASCII Art Generator";
s3.innerText = "Binary File Parser";
s4.innerText = "Data Encoding System";

const baseStyle =
  "font-medium text-lg px-2 py-1 rounded-lg duration-300 transition-all scale-100 cursor-pointer w-56 text-center p-2";
s1.classList = baseStyle + " bg-surface0 text-lavander active";
s2.classList = baseStyle;
s3.classList = baseStyle;
s4.classList = baseStyle;

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
