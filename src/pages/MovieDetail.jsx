import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'




export default function MovieDetail()
{
   let {id} = useParams()
   let [movie,SetMovie] = useState(null)
   
    useEffect(()=>{
     async function getMovie(){
     let result = await fetch(`http://www.omdbapi.com/?apikey=9cb6f975&i=${id}`)
     let data = await result.json();
     SetMovie(data);
     console.log(data)
     }
     getMovie();
    },[id])

    if(!movie)return(<center><h2>Loading...</h2></center>)

    return(
        <>
        <center>
        <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt="Avengers: Infinity War" src={movie.Poster}/>
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong>{movie.Released}</p>
		<p><strong>Plot:</strong>{movie.Plot}</p>
	</div>
    </center>
        </>
    )
}