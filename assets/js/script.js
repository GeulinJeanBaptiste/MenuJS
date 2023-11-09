import { menuEntries } from "./modules/menuEntries.js";
import { initMenu } from "./modules/menu.js";

globalThis.menuEntries = menuEntries;

initMenu();
