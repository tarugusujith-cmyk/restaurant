import type { MenuItem } from "../types/Menu";

// Real dessert photography, kept consistent with the photographic pizza/pasta menu.
const tiramisu =
  "https://images.unsplash.com/photo-1773418264113-4206f83e4aa7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const chocolateDelight =
  "https://images.unsplash.com/photo-1554907253-5f1d721e3586?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";
const italianSweetPlate =
  "https://images.unsplash.com/photo-1669926334000-80b2afeb98c7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000";

export const dessertItems: MenuItem[] = [
  {
    id: 301,
    name: "Tiramisu",
    description: "Classic Italian tiramisu layered with coffee, mascarpone and cocoa.",
    price: 8.5,
    category: "Dessert",
    rating: 4.9,
    image: tiramisu,
  },
  {
    id: 302,
    name: "Chocolate Delight",
    description: "A rich chocolate dessert finished with a smooth and indulgent topping.",
    price: 8,
    category: "Dessert",
    rating: 4.8,
    image: chocolateDelight,
  },
  {
    id: 303,
    name: "Italian Sweet Plate",
    description: "A delicious selection of sweet flavors to finish your Italian meal.",
    price: 8.75,
    category: "Dessert",
    rating: 4.7,
    image: italianSweetPlate,
  },
];
