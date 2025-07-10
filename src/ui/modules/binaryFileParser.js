import { createPageLayout, createComingSoonMessage } from "../pageLayout.js";

export async function binaryFileParser() {
  const container = createPageLayout({
    title: "Binary File Parser",
    accentColor: "theme-accent-tertiary",
  });

  // For now, add coming soon message
  container.appendChild(createComingSoonMessage("Binary File Parser"));
}
