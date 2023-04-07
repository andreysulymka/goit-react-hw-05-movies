import PropTypes from "prop-types";
import { Title, StyledLink, Ul, Li, Div, Img, Subtitle } from "./MoviesList.styled";
import { useLocation } from "react-router-dom";

export function MoviesList({ title, movies}) {
    const location = useLocation();
    return(
        <>
            {title && <Title>{title}</Title>}
            <Ul>
                {movies.map(movie => {
                    return(
                        <Li key={movie.id}>
                            <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
                                <Img src={movie.poster_path ? (`https://www.themoviedb.org/t/p/original/${movie.poster_path}`): ("https://i.ibb.co/z703XMd/film-plug.png")} alt={movie.title}></Img>
                                <Div>
                                    <Subtitle>{movie.title}</Subtitle>
                                    
                                </Div>
                            </StyledLink>
                        </Li>
                    )
                })}
            </Ul>
        </>
    );
};

MoviesList.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }))
};