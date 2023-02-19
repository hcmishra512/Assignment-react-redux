import React from "react";
import classes from "./Header.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className={classes.appbar}>
      <div className={classes.toolbar}>
        <p>Late Delivery</p>
        <ArrowDropDownIcon className={classes.arrow_icon} />
      </div>
    </div>
  );
};

export default Header;
