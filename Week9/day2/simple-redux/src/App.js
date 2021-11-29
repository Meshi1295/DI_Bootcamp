import React from 'react';
import View from './components/View';
import Helper from './components/Helper';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <View />
          <Helper />
        </header>
      </div>
    );
}

export default App;
