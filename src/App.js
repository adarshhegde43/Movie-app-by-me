import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' ; //importing bootstrap...
import './App.css'; //importing our own styles...

import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies , setMovies ] = useState([]) ;
  const [searchValue , setSearchValue] = useState('') ; 


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5638c325`; 
    const response = await fetch(url) ; 
    const responseJSON = await response.json() ; 

    console.log(responseJSON) ; 
    if(responseJSON.Search){
      setMovies(responseJSON.Search) ; 
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue) ; 
  } , [searchValue]) ; 

  return (

      <div className='container-fluid movie-app'>

        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading = 'Movies'/>
          <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue}/>
        </div>

        <div className='row'>
          <MovieList movies={movies} />
        </div>

      </div>
  );  
}

export default App;
