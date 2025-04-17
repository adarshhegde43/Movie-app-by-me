import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-4 d-flex justify-content-start mt-4"> {/* Responsive columns */}
                    <img 
                        src={movie.Poster} 
                        alt={movie.Title} 
                        className="img-fluid" 
                    />
                </div>
            ))}
        </>
    );
};

export default MovieList;