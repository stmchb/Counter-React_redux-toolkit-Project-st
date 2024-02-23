import { useDispatch } from "react-redux";
import { counterActions,privacyToggle } from "../store";

const Controls = () => {
  const dispatchValue = useDispatch();

  const handleIncrement = () => {
    dispatchValue(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatchValue(counterActions.decrement());
  };

  const handleToggle = () => {
    dispatchValue(privacyToggle()); // Updated usage
  };

  return (
    <div className="button-container">
      <button onClick={handleIncrement} style={{ margin: "10px" }} type="button" className="btn btn-primary">
        +
      </button>

      <button onClick={handleDecrement} type="button" className="btn btn-secondary">
        -
      </button>

      <button onClick={handleToggle} style={{ margin: "10px" }} type="button" className="btn btn-warning">
        Toggle
      </button>
    </div>
  );
};

export default Controls;
