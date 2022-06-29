import "./counter.css";
import counter from "../../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  console.log("render");
  return (
    <div className="counter">
      {"count = " + counter.count}
      <div className="btns">
        <button className="btn" onClick={() => counter.increment()}>
          +
        </button>
        <button className="btn" onClick={() => counter.decrement()}>
          -
        </button>
      </div>
    </div>
  );
});

export default Counter;
