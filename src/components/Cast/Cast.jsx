import { H4, P } from "components/Reviews/Reviews.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "service/Api";
import { Img, Ul, Li, H3 } from "./Cast.styled";

export default function Cast () {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.getMovieActors(movieId)
        .then( response => {
          const actors = response.cast.map(actor => {
            return({name: actor.name, character: actor.character, id: actor.credit_id, photo: actor.profile_path})
          })
          setCast(actors);
        })
    }, [movieId]);

    return (
        <>
            <H3 className="isHidden">Actors</H3>
            {cast.length===0 ?
            <P>There is no information about actors</P>
            :
            <Ul>
                {cast.map(actor => {
                    return (
                        <Li key={actor.id}>
                            <div>
                                <H4>{actor.name}</H4>
                                <P>Character: {actor.character}</P>
                            </div>
                            <Img src={actor.photo ? (`https://www.themoviedb.org/t/p/original/${actor.photo}`) : ("https://i.ibb.co/dPBdjhT/actor-plug.png")} alt={actor.name}></Img>
                        </Li>
                    )
                })}
            </Ul>
            }
        </>
    )
};