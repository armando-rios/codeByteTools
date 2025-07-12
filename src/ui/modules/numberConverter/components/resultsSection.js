import { createResultItem } from "./resultItem.js";

export function createResultsSection() {
  const resultsWrapper = document.createElement("div");
  resultsWrapper.className = "space-y-3";

  const title = document.createElement("h3");
  title.textContent = "Results";
  title.className = "text-lg font-semibold text-theme-text-primary mb-3";

  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results-container";
  resultsContainer.className = "gap-2 sm:grid grid-cols-2";

  showPlaceholder(resultsContainer);

  resultsWrapper.appendChild(title);
  resultsWrapper.appendChild(resultsContainer);

  return resultsWrapper;
}

export function showPlaceholder(container) {
  container.innerHTML = "";
  const placeholder = document.createElement("p");
  placeholder.className = "text-theme-text-muted text-center py-8";
  placeholder.textContent = "Enter a number to see conversions...";
  container.appendChild(placeholder);
}

export function showError(container, message) {
  container.innerHTML = "";
  const error = document.createElement("p");
  error.className = "text-theme-error text-center py-8";
  error.textContent = message;
  container.appendChild(error);
}

export function showResults(container, decimalValue) {
  container.innerHTML = "";

  const results = [
    {
      label: "Decimal",
      value: decimalValue.toString(10),
      color: "theme-accent-primary",
    },
    {
      label: "Binary",
      value: decimalValue.toString(2),
      color: "theme-accent-secondary",
    },
    {
      label: "Hexadecimal",
      value: decimalValue.toString(16).toUpperCase(),
      color: "theme-accent-tertiary",
    },
    {
      label: "Octal",
      value: decimalValue.toString(8),
      color: "theme-accent-quaternary",
    },
  ];

  results.forEach((result) => {
    const resultItem = createResultItem(
      result.label,
      result.value,
      result.color,
    );
    container.appendChild(resultItem);
  });
}
