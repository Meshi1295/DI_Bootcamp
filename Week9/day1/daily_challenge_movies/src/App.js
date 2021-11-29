import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Redux Movies</h1>
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
