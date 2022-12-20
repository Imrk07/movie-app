import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    const url = "http://www."
    const data = await Response.json();
  }
  return (
    <>
      <div className="movie-app">
        <h1> Movie Hall</h1>
        <movielist  > </movielist>
      </div>
    </>

  );
}

export default App;
