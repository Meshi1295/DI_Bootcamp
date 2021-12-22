import React , {useContext} from 'react';
import {AppContext} from './App';
const Counter = (props) => {
  const {counter,setCounter,text,setText} = useContext(AppContext)
  return (
    <>
      {text}
      <div>
      {counter}
      </div>
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
      <input type="text" onChange={(e)=>setText(e.target.value)} />
    </>
  )
}
export default Counter
