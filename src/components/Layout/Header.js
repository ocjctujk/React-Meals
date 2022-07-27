import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";




function Header(props) {

  return (
    <>
      <header className={classes.header}>
        <h1>React Foods</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </>
  );
}

export default Header;
