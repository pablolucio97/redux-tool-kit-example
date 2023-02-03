import { Button } from "./components/button";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { decrement, increment } from './store/Stock/Stock.store'

function App() {

  const dispatch = useDispatch()
  const reducerState = useSelector((state: RootState) => state.stock)

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  return (
    <>
      <Button title='+' onClick={handleIncrement} />
      <Button title='-' onClick={handleDecrement} />
      <p>{reducerState.counter}</p>
    </>
  );
}

export default App;
