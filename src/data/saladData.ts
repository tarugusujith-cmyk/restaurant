import type { MenuItem } from "../types/Menu";

// Real food-photography images matching the style of the existing pizza/pasta menu.
// Unsplash images are free to use under the Unsplash License.
const gardenSalad =
  "https://images.unsplash.com/photo-1747292718361-c838a9968ec7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const caesarSalad =
  "https://images.unsplash.com/photo-1556386734-4227a180d19e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const mediterraneanSalad =
  "https://images.unsplash.com/photo-1749386387704-7755be8be87b?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";

export const saladItems: MenuItem[] = [
  {
    id: 201,
    name: "Garden Fresh Salad",
    description: "Crisp seasonal vegetables, fresh greens and a light Italian dressing.",
    price: 9.5,
    category: "Salad",
    rating: 4.8,
    image: gardenSalad,
  },
  {
    id: 202,
    name: "Italian Caesar Salad",
    description: "Fresh lettuce, parmesan, crunchy toppings and creamy Caesar dressing.",
    price: 10.5,
    category: "Salad",
    rating: 4.7,
    image: caesarSalad,
  },
  {
    id: 203,
    name: "Mediterranean Salad",
    description: "A colorful mix of vegetables, herbs and Mediterranean-inspired flavors.",
    price: 11,
    category: "Salad",
    rating: 4.9,
    image: mediterraneanSalad,
  },
];
