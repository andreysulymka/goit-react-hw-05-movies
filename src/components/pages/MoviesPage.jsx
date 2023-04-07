import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from "components/MoviesList/MoviesList";
import { apiService } from "service/Api";
import InputBar from "components/Input/Input";


export default function MoviePage() {
    const [movies, setMovies] = useState(null);
    const [emptySearch, setEmptySearch] = useState(false);
    const [emptyRequest, setemptyRequest] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    useEffect(()=>{
        if (query.trim() === '') {
            return;
        };
        apiService.getMoviesByKeyWord(query)
            .then(results => {
                console.log(results);
                if(results.length === 0) {
                    setemptyRequest(true);
                    setEmptySearch(false);
                    Notify.failure(`There are no ${query} movies`);
                    return;
                };
                
                setMovies(results);
                setEmptySearch(false);
                setemptyRequest(false);
                }
        );
    }, [query]);

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    const searchMovieByKeyWord = (inputValue) => {
        setMovies(null);
        setemptyRequest(false);
        updateQueryString(inputValue);
        if (inputValue.trim() === '') {
            setEmptySearch(true);
            Notify.failure(`Search request shouldn't be empty`);
        };
    };

    return (
        <>
            <InputBar handleSearchSubmit={searchMovieByKeyWord}/>
            {emptySearch && <p>Search request shouldn't be empty</p>}
            {emptyRequest && <p>There are no ${query} movies</p>}
            {movies && <MoviesList movies={movies}/>}
        </>
    );
};