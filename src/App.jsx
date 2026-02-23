import { useState, useEffect } from "react";
import './App.css'

import MovieDisplay from './Components/MovieDisplay.jsx';
import Form from './Components/Form.jsx';

function App() {
  
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

   // Function to get movies
  const getMovie = async(searchTerm) => {

    try {
        // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);

    } catch (error) {
      console.error(error)
    }
  };
  

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);


  return (
    <>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie} />
    </>
  )
}

export default App
