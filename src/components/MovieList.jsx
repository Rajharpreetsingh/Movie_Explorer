import MovieCard from"./MovieCard"

export default function MovieList({movies})
{
   if(movies.length===0)
   {
        return (<h2><center>404 Movie Not Found</center></h2>)
   }

    return(
        <>
        <div className="movie-list">
            {movies.map((movie)=>(
                   <MovieCard  key={movie.imdbID}   movie={movie}/>
            ))}
		
		</div>
        
        </>
    )
}

