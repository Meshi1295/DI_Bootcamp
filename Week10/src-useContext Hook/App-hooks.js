import React,{useState,useEffect} from 'react';
import './App.css';

const App = () => {
  const [counter,setCounter] = useState(0);
  const [arr, setArr] = useState([])

  useEffect(()=>{
    arr.push(counter);
    setArr([...arr])
    console.log(arr);
  },[counter])



  return (
    <div className="App">
      <header className="App-header">
       With Hooks:
        <div>
        {counter} 
        </div>
        <button onClick={()=>setCounter(counter+1)}>Plus</button>
        <button onClick={()=>setCounter(counter-1)}>Minus</button>
      </header>
    </div>
  );

}

export default App;
