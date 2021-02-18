import React from "react";
import { categories } from "../../data";

function Filter() {
  function handleFilterNameChange(e) {
    console.log("Filtering by name:", e.target.value);
  }

  function handleFilterCategoryChange(e) {
    console.log("Filtering by category:", e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleFilterNameChange}
      />
      <select name="filter" onChange={handleFilterCategoryChange}>
        <option value="All">Filter by category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
