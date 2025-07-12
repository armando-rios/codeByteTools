export function createBaseSelector() {
  const selectorWrapper = document.createElement("div");
  const label = document.createElement("label");
  const select = document.createElement("select");

  label.textContent = "Input base system";
  label.className = "block text-theme-text-secondary text-sm mb-2";
  label.setAttribute("for", "base-selector");

  select.id = "base-selector";
  select.className =
    "w-full p-3 border-2 border-theme-border rounded-lg bg-theme-surface-1 text-theme-text-primary focus:outline-none focus:ring-2 focus:ring-theme-accent-primary transition-all duration-300 cursor-pointer";

  const bases = [
    { value: "10", text: "Decimal (Base 10)" },
    { value: "2", text: "Binary (Base 2)" },
    { value: "16", text: "Hexadecimal (Base 16)" },
    { value: "8", text: "Octal (Base 8)" },
  ];

  bases.forEach((base) => {
    const option = document.createElement("option");
    option.value = base.value;
    option.textContent = base.text;
    select.appendChild(option);
  });

  selectorWrapper.appendChild(label);
  selectorWrapper.appendChild(select);

  return selectorWrapper;
}
