const app = document.querySelector("#app");

/**
 * Creates a reusable page layout using DOM API
 * @param {Object} config - Configuration object
 * @param {string} config.title - Page title
 * @param {string} config.accentColor - Tailwind color class (e.g., 'theme-accent-primary')
 * @returns {HTMLElement} The content container element where you can append your content
 */
const colorClasses = {
  "theme-accent-primary":
    "text-theme-accent-primary drop-shadow-[0_0_8px_var(--color-theme-accent-primary)]",
  "theme-accent-secondary":
    "text-theme-accent-secondary drop-shadow-[0_0_8px_var(--color-theme-accent-secondary)]",
  "theme-accent-tertiary":
    "text-theme-accent-tertiary drop-shadow-[0_0_8px_var(--color-theme-accent-tertiary)]",
  "theme-accent-quaternary":
    "text-theme-accent-quaternary drop-shadow-[0_0_8px_var(--color-theme-accent-quaternary)]",
};

export function createPageLayout({ title, accentColor }) {
  // Clear app
  app.innerHTML = "";

  // Create main wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "w-full max-w-4xl";

  // Create title
  const titleEl = document.createElement("h2");
  titleEl.className = `text-3xl font-bold mb-6 ${colorClasses[accentColor]}`;
  titleEl.textContent = title;

  // Create card container
  const card = document.createElement("div");
  card.className =
    "bg-theme-bg-secondary border border-theme-border rounded-xl p-6 shadow-lg";

  // Append elements
  wrapper.appendChild(titleEl);
  wrapper.appendChild(card);
  app.appendChild(wrapper);

  // Return the card so modules can add content to it
  return card;
}

/**
 * Creates a default "coming soon" message
 * @param {string} moduleName - Name of the module
 * @returns {HTMLElement} Paragraph element with coming soon message
 */
export function createComingSoonMessage(moduleName) {
  const message = document.createElement("p");
  message.className = "text-theme-text-secondary";
  message.textContent = `${moduleName} module coming soon...`;
  return message;
}
