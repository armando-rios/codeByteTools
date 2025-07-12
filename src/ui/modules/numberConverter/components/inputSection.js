export function createInputSection() {
  const inputWrapper = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.textContent = "Number to convert";
  label.className = "block text-theme-text-secondary text-sm mb-2";
  label.setAttribute("for", "number-input");

  input.type = "text";
  input.id = "number-input";
  input.placeholder = "Enter a number...";
  input.className =
    "w-full p-3 border-2 border-theme-border rounded-lg bg-theme-surface-1 text-theme-text-primary focus:outline-none focus:ring-2 focus:ring-theme-accent-primary transition-all duration-300";

  inputWrapper.appendChild(label);
  inputWrapper.appendChild(input);

  return inputWrapper;
}
