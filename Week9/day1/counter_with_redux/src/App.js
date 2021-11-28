import './App.css';
import Counter from './Counter';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
