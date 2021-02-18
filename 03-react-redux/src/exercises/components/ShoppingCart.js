import React from "react";
import Item from "./Item";
import { items } from "../../data";

function ShoppingCart() {
  const listItems = items
    .filter((item) => item.isInCart)
    .map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="ShoppingCart">
      <h2>In Cart</h2>
      <ul className="Items">{listItems}</ul>
    </section>
  );
}

export default ShoppingCart;
