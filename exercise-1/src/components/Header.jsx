import React from "react";


const Header = ({ batchName }) => {
  return (
    <header className="header">
      <img src="/path/to/logo.png" alt="PN Logo" className="logo" />
      <h1>Student Scores - {batchName}</h1>
    </header>
  );
};

export default Header;
