// 📃 https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch

function setupEvents(store) {
  document.querySelector("#increment").addEventListener("click", () => {
    store.dispatch({type: "counter/incremented" });
  });

  document.querySelector("#decrement").addEventListener("click", () => {
    store.dispatch({type: "counter/decrement" });
  });
}

export default setupEvents;
