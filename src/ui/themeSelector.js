const THEME_KEY = "codebytetools-theme";

const THEMES = [
  { value: "catppuccin", label: "Catppuccin" },
  { value: "dracula", label: "Dracula" },
  { value: "nord", label: "Nord" },
  { value: "tokyo-night", label: "Tokyo Night" },
];

/**
 * Gets the saved theme from localStorage or returns default
 * @returns {string} Theme name
 */
function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || "catppuccin";
}

/**
 * Saves the theme to localStorage
 * @param {string} theme - Theme name
 */
function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

/**
 * Applies the theme to the body element
 * @param {string} theme - Theme name
 */
function applyTheme(theme) {
  const body = document.body;

  // Remove all theme classes
  body.classList.remove("catppuccin", "dracula", "nord", "tokyo-night");

  // Add the selected theme class
  body.classList.add(theme);

  // Save to localStorage
  saveTheme(theme);
}

/**
 * Creates a custom theme selector dropdown
 * @param {HTMLElement} container - Container element
 * @param {string} currentTheme - Current theme value
 * @returns {Object} Object with update method
 */
function createCustomSelector(container, currentTheme) {
  // Clear container
  container.innerHTML = "";

  // Create wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center gap-2 relative";

  // Create label
  const label = document.createElement("span");
  label.className = "text-theme-text-secondary text-sm font-medium";
  label.textContent = "Tema:";

  // Create custom select button
  const selectButton = document.createElement("button");
  selectButton.className =
    "px-3 py-1.5 bg-theme-bg-tertiary border border-theme-border rounded-lg text-theme-text-primary text-sm outline-none cursor-pointer transition-all hover:border-theme-border-hover flex items-center gap-2 min-w-[160px] justify-between";
  selectButton.setAttribute("aria-haspopup", "listbox");
  selectButton.setAttribute("aria-expanded", "false");

  // Create button content
  const buttonText = document.createElement("span");
  buttonText.className = "flex items-center gap-2";

  // Create arrow icon
  const arrow = document.createElement("span");
  arrow.className = "transition-transform duration-200";
  arrow.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  selectButton.appendChild(buttonText);
  selectButton.appendChild(arrow);

  // Create dropdown menu
  const dropdown = document.createElement("div");
  dropdown.className =
    "absolute top-full right-0 mt-2 bg-theme-bg-secondary border border-theme-border rounded-lg shadow-lg overflow-hidden opacity-0 invisible transition-all duration-200 min-w-[160px] z-50";

  // Create dropdown items
  THEMES.forEach((theme) => {
    const item = document.createElement("button");
    item.className =
      "w-full px-3 py-2 text-left text-theme-text-primary hover:bg-theme-surface-0 transition-colors flex items-center gap-2 text-sm";
    item.setAttribute("data-theme", theme.value);

    const text = document.createElement("span");
    text.textContent = theme.label;

    item.appendChild(text);

    // Highlight current theme
    if (theme.value === currentTheme) {
      item.classList.add("bg-theme-surface-0", "text-theme-accent-primary");
    }

    // Click handler
    item.addEventListener("click", () => {
      applyTheme(theme.value);
      updateButton(theme);
      closeDropdown();

      // Update active state
      dropdown.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("bg-theme-surface-0", "text-theme-accent-primary");
      });
      item.classList.add("bg-theme-surface-0", "text-theme-accent-primary");
    });

    dropdown.appendChild(item);
  });

  // Update button display
  function updateButton(theme) {
    buttonText.textContent = theme.label;
  }

  // Toggle dropdown
  function toggleDropdown() {
    const isOpen = selectButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    dropdown.classList.remove("opacity-0", "invisible");
    dropdown.classList.add("opacity-100", "visible");
    arrow.style.transform = "rotate(180deg)";
    selectButton.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    dropdown.classList.add("opacity-0", "invisible");
    dropdown.classList.remove("opacity-100", "visible");
    arrow.style.transform = "rotate(0deg)";
    selectButton.setAttribute("aria-expanded", "false");
  }

  // Event listeners
  selectButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close dropdown on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });

  // Assemble
  wrapper.appendChild(label);
  wrapper.appendChild(selectButton);
  wrapper.appendChild(dropdown);
  container.appendChild(wrapper);

  // Set initial theme
  const initialTheme = THEMES.find((t) => t.value === currentTheme);
  updateButton(initialTheme);

  return {
    update: updateButton,
  };
}

/**
 * Initializes the theme selector
 */
export function initThemeSelector() {
  const container = document.getElementById("themeSelector");

  if (!container) {
    console.error("Theme selector container not found");
    return;
  }

  // Get saved theme
  const savedTheme = getSavedTheme();

  // Apply saved theme on load
  applyTheme(savedTheme);

  // Create custom selector
  createCustomSelector(container, savedTheme);
}
