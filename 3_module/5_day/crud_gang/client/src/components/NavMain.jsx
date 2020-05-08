import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavMain = (props) => {
  console.log(props, "nav main props");
  return (
    <nav className="NavMain">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/characters/new">Create a character</Link>
    </nav>
  );
};

export default withRouter(NavMain);
