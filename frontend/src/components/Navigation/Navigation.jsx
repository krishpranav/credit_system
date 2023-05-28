import React from "react";
import classes from "./Navigation.module.css";
import { FaEthereum } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={classes.navBar}>
      <Link to="/">
        <div className={classes.logo}>
          <p>BANKING</p>
          <FaEthereum className={classes.ethIcon} />
        </div>
      </Link>
      <ul className={classes.navOpts}>
        <li>
          <NavLink activeClassName={classes.active} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
