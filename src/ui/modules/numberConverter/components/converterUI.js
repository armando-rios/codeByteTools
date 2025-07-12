import { createInputSection } from "./inputSection.js";
import { createBaseSelector } from "./baseSelector.js";
import {
  createResultsSection,
  showPlaceholder,
  showError,
  showResults,
} from "./resultsSection.js";

const converterUI = () => {
  const container = document.createElement("div");
  container.className = "space-y-6";

  // Create sections
  const inputSection = createInputSection();
  const baseSelector = createBaseSelector();
  const resultsSection = createResultsSection();

  // Get DOM elements
  const input = inputSection.querySelector("#number-input");
  const select = baseSelector.querySelector("#base-selector");
  const resultsContainer = resultsSection.querySelector("#results-container");

  // Event handler for real-time conversion
  const handleConversion = () => {
    const value = input.value.trim();
    const baseFrom = parseInt(select.value);

    if (!value) {
      showPlaceholder(resultsContainer);
      return;
    }

    try {
      const decimalValue = parseInt(value, baseFrom);

      if (isNaN(decimalValue)) {
        showError(resultsContainer, "Invalid number for selected base");
        return;
      }

      showResults(resultsContainer, decimalValue);
    } catch (error) {
      console.error(error);
      showError(resultsContainer, "Invalid input");
    }
  };

  // Attach event listeners
  input.addEventListener("input", handleConversion);
  select.addEventListener("change", handleConversion);

  // Append all sections
  container.appendChild(inputSection);
  container.appendChild(baseSelector);
  container.appendChild(resultsSection);

  return container;
};

export default converterUI;
