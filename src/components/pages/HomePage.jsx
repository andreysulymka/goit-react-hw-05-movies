import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { apiService } from "service/Api";

export default function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        apiService.getMostPopularMovies().then(
          response => setMovies(response)
        );    
      }, []);

    return (
        <MoviesList title="Trending today" movies={movies} goBack={'/'}/>
    );
};