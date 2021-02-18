function categoryReducer(state = [], action) {
  switch (action.type) {
    case "items/addAll":
      return action.payload;
    default:
      return state;
  }
}

export default categoryReducer;
