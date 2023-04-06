import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "service/Api";
import { Li, Ul, P, H4 } from "./Reviews.styled";


export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        apiService.getMovieReviews(movieId)
        .then(response => {
          const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
          setReviews(reviewsData);
        })
      }, [movieId]);

    return(
        <>
            {reviews.length ===0 ?
                <P> There are no reviews yet</P>
                :
                <>
                    <h3 className="isHidden">Reviews</h3> 
                    <Ul>
                        {reviews.map(review => {
                            return(
                                <Li key={review.id}>
                                    <H4>Author: {review.author}</H4>
                                    <P>{review.review}</P>
                                </Li>
                            )
                        })}
                    </Ul>
                </>
            }
        </>
    )
};