import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js'
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);



  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

    <Switch>
      <Route path="/movies/:id">
        <Movie movies={movieList}/>
      </Route>
      <Route exact path="/">
        <MovieList movies={movieList}/>
      </Route>
    </Switch>
    </div>
  );
}
