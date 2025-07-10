import { createPageLayout, createComingSoonMessage } from "../pageLayout.js";

export async function asciiArtGenerator() {
  const container = createPageLayout({
    title: "ASCII Art Generator",
    accentColor: "theme-accent-secondary",
  });

  // For now, add coming soon message
  container.appendChild(createComingSoonMessage("ASCII Art Generator"));
}
