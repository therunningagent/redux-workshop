const items = [
  { id: 1, name: "Yogurt", category: "Dairy", isInCart: true },
  { id: 2, name: "Pomegranate", category: "Produce", isInCart: false },
  { id: 3, name: "Lettuce", category: "Produce", isInCart: true },
  { id: 4, name: "String Cheese", category: "Dairy", isInCart: true },
  { id: 5, name: "Swiss Cheese", category: "Deli", isInCart: false },
  { id: 6, name: "Cookies", category: "Dessert", isInCart: false }
];

function itemGenerator() {
  let id = 6;

  return function makeItem(name, category) {
    id++;
    return {
      id,
      name,
      category,
      isInCart: false
    };
  };
}

const makeItem = itemGenerator();

const categories = ["Produce", "Dairy", "Dessert", "Deli"];

export { items, makeItem, categories };
