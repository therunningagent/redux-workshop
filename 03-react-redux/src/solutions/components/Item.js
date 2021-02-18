import React from "react";

function Item({ item }) {
  const { id, isInCart, name, category } = item;

  function handleUpdateClick() {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !isInCart,
      }),
    })
      .then((r) => r.json())
      .then((udpatedItem) => {
        console.log("Updating", udpatedItem);
      });
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        console.log("Deleting", item);
      });
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <span>
        <button
          onClick={handleUpdateClick}
          className={isInCart ? "remove" : "add"}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button onClick={handleDeleteClick} className="remove">
          Delete
        </button>
      </span>
    </li>
  );
}

export default Item;
