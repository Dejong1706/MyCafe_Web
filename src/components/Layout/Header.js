import React, { Fragment } from "react";
import coffeeImg from "../../assets/coffee.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Élégance</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={coffeeImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
