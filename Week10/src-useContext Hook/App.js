import React, {useState,useEffect} from 'react';
import './App.css';
import Counter from './Counter'
import Text from './Text'

export const AppContext = React.createContext();

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('Text Text Text');
  return (
    <div className="App">
      <header className="App-header">
        <h1>useContext</h1>
        <AppContext.Provider value={{
          counter, setCounter, text,setText
        }}>
          <Counter/>
          <Text />
        </AppContext.Provider>

      </header>
    </div>
  );

}

export default App;
