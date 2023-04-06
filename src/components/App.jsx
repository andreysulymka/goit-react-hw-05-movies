import { Routes, Route, } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";




export const App = () => {
  return (
    <div
     
    >
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetails/>} >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        </Route>
        
      </Routes>
    </div>
  );
};
