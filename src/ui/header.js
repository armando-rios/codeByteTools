const header = document.querySelector("header")

let nav = document.createElement("nav")
nav.classList = "flex gap-8"
const s1 = document.createElement("a")
const s2 = document.createElement("a")
const s3 = document.createElement("a")
const s4 = document.createElement("a")
const sections = [s1, s2, s3, s4]

function setActive(event) {
  sections.forEach(a => a.classList.remove("bg-white", "text-black", "active"))
  event.target.classList.add("bg-white", "text-black", "active")
}

s1.innerText = "Number Converter"
s2.innerText = "ASCII Art Generator"
s3.innerText = "Binary File Parser"
s4.innerText = "Data Encoding System"

s1.classList = "font-medium text-lg p-2 rounded-lg duration-300 transition-all scale-100 cursor-pointer bg-white text-black active"
s2.classList = "font-medium text-lg p-2 rounded-lg duration-300 transition-all scale-100 cursor-pointer"
s3.classList = "font-medium text-lg p-2 rounded-lg duration-300 transition-all scale-100 cursor-pointer"
s4.classList = "font-medium text-lg p-2 rounded-lg duration-300 transition-all scale-100 cursor-pointer"

sections.forEach((e) => {
  e.addEventListener('click', setActive)
})

nav.appendChild(s1)
nav.appendChild(s2)
nav.appendChild(s3)
nav.appendChild(s4)

export const setHeader = () => {
  header.appendChild(nav)
}
