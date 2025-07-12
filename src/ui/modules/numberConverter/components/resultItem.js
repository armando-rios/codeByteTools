export function createResultItem(label, value, accentColor) {
  const item = document.createElement("div");
  item.className =
    "flex justify-between items-center p-3 bg-theme-surface-1 border border-theme-border rounded-lg hover:border-theme-border-hover transition-all duration-300";

  const labelEl = document.createElement("span");
  labelEl.className = `font-medium text-${accentColor}`;
  labelEl.textContent = label + ":";

  const valueEl = document.createElement("span");
  valueEl.className = "font-mono text-theme-text-primary text-lg";
  valueEl.textContent = value;

  item.appendChild(labelEl);
  item.appendChild(valueEl);

  return item;
}
