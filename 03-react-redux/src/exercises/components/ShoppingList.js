import React from "react";
import Filter from "./Filter";
import Item from "./Item";
import { items } from "../../data";

function ShoppingList() {
  const listItems = items
    .filter((item) => !item.isInCart)
    .map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="ShoppingList">
      <h2>My List</h2>
      <Filter />
      <ul className="Items">{listItems}</ul>
    </section>
  );
}

export default ShoppingList;
