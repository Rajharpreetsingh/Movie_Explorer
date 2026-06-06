
import {useState,useEffect,useRef} from "react"
import MovieList from  "../components/MovieList"

export default function Home()
{

    let [movies,SetMovies] = useState([])
    let [loading,SetLoading] = useState(false)
    let inputRef = useRef()


    let fetchMovies = async (query) =>{
     SetLoading(true);
     let result = await fetch(`http://www.omdbapi.com/?apikey=9cb6f975&s=${query}`)
     let data = await result.json();
     console.log(data);
     SetMovies(data.Search || [])
     SetLoading(false);
    }

    useEffect(()=>{
        fetchMovies("Avengers")
    },[])

    
   function handleSearch(e)
   {
      e.preventDefault();
      let query = inputRef.current.value.trim();
      if(query)
        fetchMovies(query)
   }


    return (
       <>
        
        <div className="home">
		<form onSubmit={handleSearch}>
			<input ref={inputRef} className="searchInput" placeholder="Search for a movie..."/>
			<button type="submit">Search 🔎</button>
		</form>
        {loading ? <center><span>Loading</span></center> : <MovieList  movies={movies}/>}
		
	    </div>	

        
       </>
    )
}