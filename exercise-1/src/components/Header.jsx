import React from "react";


function Header({ batchName, logo }) {
  return (
    <header id="header">
      <img src={logo} alt="PN Logo" />
      <h1>Students results for {batchName}</h1>
    </header>
  );
}

export default Header;
