import "./style.css";
import { setNav } from "./ui/navBar.js";
import { numberConverter } from "./ui/modules/numberConverter.js";
import { initThemeSelector } from "./ui/themeSelector.js";

// Initialize theme selector
initThemeSelector();

// Initialize navigation and default module
setNav();
numberConverter();
