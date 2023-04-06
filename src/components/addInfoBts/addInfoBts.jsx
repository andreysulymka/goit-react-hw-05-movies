import { StyledLink, Ul, Li, Div } from "./addInfoBts.styled";
  
export function AdditionalInfoButtons({ movieId }) {
    return (
        <Div>
            <h3>Additional information</h3>
            <Ul> 
                <Li><StyledLink to="cast">Cast</StyledLink></Li>
                <Li><StyledLink to="reviews">Reviews</StyledLink></Li>
            </Ul>
        </Div> 
    );
};