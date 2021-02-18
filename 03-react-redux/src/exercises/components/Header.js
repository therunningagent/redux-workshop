import React from "react";

function Header() {
  function handleDarkModeClick() {
    console.log("Toggling Dark Mode");
  }

  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={handleDarkModeClick}>
        {true ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
