import React from "react";

const Header = (props) => {
  return (
    <header className="App-header">
      <h4>{props.text}</h4>
    </header>
  );
};
export default Header;