import { createPageLayout, createComingSoonMessage } from "../pageLayout.js";

export async function dataEncodingSystem() {
  const container = createPageLayout({
    title: "Data Encoding System",
    accentColor: "theme-accent-quaternary",
  });

  // For now, add coming soon message
  container.appendChild(createComingSoonMessage("Data Encoding System"));
}
