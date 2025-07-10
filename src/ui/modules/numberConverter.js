import { createPageLayout, createComingSoonMessage } from "../pageLayout.js";

export async function numberConverter() {
  const container = createPageLayout({
    title: "Number Converter",
    accentColor: "theme-accent-primary",
  });

  // For now, add coming soon message
  container.appendChild(createComingSoonMessage("Number Converter"));
}
