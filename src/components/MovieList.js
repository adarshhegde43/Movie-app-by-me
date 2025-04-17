import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent
    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className="image-container col-md-3 col-sm-6 mb-4 d-flex justify-content-start mt-4" style = { {maxWidth : "250px"} }> {/* Responsive columns */}
                    <img 
                        src={movie.Poster} 
                        alt={movie.Title} 
                        className="img-fluid w-100" 
                    />
                    <div className='overlay d-flex align-items-center justify-content-center'>
                        <FavoriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;