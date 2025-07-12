import "./style.css";
import { initThemeSelector } from "./ui/themeSelector.js";
import { setNav } from "./ui/navBar.js";
import { numberConverter } from "./ui/modules/numberConverter/index.js";

// Initialize theme selector
initThemeSelector();

// Initialize navigation and default module
setNav();
numberConverter();
