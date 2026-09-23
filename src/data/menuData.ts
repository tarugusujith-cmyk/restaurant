import type { MenuItem } from "../types/Menu";
import { pastaItems } from "./pastaData";
import { pizzaItems } from "./pizzaData";
import { saladItems } from "./saladData";
import { dessertItems } from "./dessertData";
import { drinkItems } from "./drinkData";

// The main menu uses one correctly-matched item from each category per row,
// instead of reusing unrelated pizza/pasta images for desserts, drinks, or salads.
export const menuItems: MenuItem[] = [
  pastaItems[0],
  pizzaItems[0],
  saladItems[0],
  dessertItems[0],
  drinkItems[0],
  pastaItems[1],
  pizzaItems[1],
  saladItems[1],
  dessertItems[1],
  drinkItems[1],
  pastaItems[2],
  pizzaItems[2],
  saladItems[2],
  dessertItems[2],
  drinkItems[2],
];
