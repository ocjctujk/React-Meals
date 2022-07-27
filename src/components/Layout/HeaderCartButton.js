import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  let btnClasses = `${classes.button}`;

  const numberOfItemsInCart = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.totalAmount]);
  return (
    <button
      className={`${btnClasses} ${btnIsHighlighted ? classes.bump : ""}`}
      onClick={props.onClick}
    >
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
