import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const enteredAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = enteredAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim() === "" ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    console.log(enteredAmountNumber);
    props.onAddItem(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={enteredAmountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
