import React, { useState } from "react";
import { categories, makeItem } from "../../data";

function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        isInCart: false,
      }),
    })
      .then((r) => r.json())
      .then((newItem) => {
        console.log("Adding", newItem);
      });
  }

  return (
    <section className="NewItem">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add to List</button>
      </form>
    </section>
  );
}

export default ItemForm;
