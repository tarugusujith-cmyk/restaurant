import type { MenuItem } from "../types/Menu";

// Real beverage photography, matching the photographic style of the pizza/pasta items.
const lemonade =
  "https://images.unsplash.com/photo-1775264175004-604006f6c8b0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const icedTea =
  "https://images.unsplash.com/photo-1565287731360-ac42345db4e1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const fruitCooler =
  "https://images.unsplash.com/photo-1654248235353-4546d1e2b199?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";

export const drinkItems: MenuItem[] = [
  {
    id: 401,
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade served chilled with a bright citrus flavor.",
    price: 4.5,
    category: "Drinks",
    rating: 4.8,
    image: lemonade,
  },
  {
    id: 402,
    name: "Italian Iced Tea",
    description: "A cool, refreshing iced tea prepared for a perfect meal companion.",
    price: 4,
    category: "Drinks",
    rating: 4.7,
    image: icedTea,
  },
  {
    id: 403,
    name: "Fresh Fruit Cooler",
    description: "A fruity and refreshing cooler made with fresh seasonal flavors.",
    price: 5,
    category: "Drinks",
    rating: 4.9,
    image: fruitCooler,
  },
];
