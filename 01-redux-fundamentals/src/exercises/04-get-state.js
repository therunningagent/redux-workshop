function setupRender(store) {
  store.subscribe(() => {
    // ✅ Get the current state from the store by calling store.getState()
    // ✅ Use the state to update the DOM
    const count = store.getState().value;
    document.querySelector("#count").textContent = `Count: ${count}`;
  });
}

export default setupRender;
