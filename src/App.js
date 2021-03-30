import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./countAction";

function App() {
  const count=useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
