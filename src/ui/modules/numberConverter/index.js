import { createPageLayout } from "../../pageLayout";
import converterUI from "./components/converterUI.js";

export async function numberConverter() {
  const container = createPageLayout({
    title: "Number Converter",
    accentColor: "theme-accent-primary",
  });

  container.appendChild(converterUI());
}
