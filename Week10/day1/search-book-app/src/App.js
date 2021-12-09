import './App.css';
import BookList from './components/BookList';
import SearchBox from './components/SearchBox'


function App() {
  return (
    <div>
      <header >
        <i className="fas fa-book fa-2x"></i>
        <h1 className="hed">Book Cards</h1>
      </header>
      <SearchBox />
      <BookList />
    </div>
  );
}

export default App;
