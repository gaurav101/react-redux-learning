import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {actions} from './store/index'
function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
  }
  const decrement=()=>{
    dispatch(actions.decrement());
  }
  const addBy=()=>{
    dispatch(actions.addBy(100));
  }
  return (
    <div >
      <h1>Counter App</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Descrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
