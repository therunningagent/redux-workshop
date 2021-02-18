function itemReducer(state = [], action) {
  switch (action.type) {
    case "items/addAll":
      return action.payload;
    case "items/add":
      return [...state.items, action.payload];
    case "items/update":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case "items/delete":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default itemReducer;
