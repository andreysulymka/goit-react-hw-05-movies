import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Movie } from "components/Movie/Movie";
import { AdditionalInfoButtons } from "components/addInfoBts/addInfoBts";
import { apiService } from "service/Api";
import { Suspense } from "react";
import { GoBackButton } from "components/Input/InputBar.styled";

export default function MovieDetails() {

    const [currentMovieInfo, setCurrentMovieInfo] = useState(null);

    const { movieId } = useParams();
    
    
    

    useEffect(() => {
          apiService.getWholeMovieInformation(movieId).then(
          response => setCurrentMovieInfo(response)
        );
    }, [movieId]);

    const navigate = useNavigate();
    const location = useRef(useLocation()); 
    const goBackLink = location.current?.state?.from || null;

    const goBack = () => {
        navigate(goBackLink);
    };

    return (<>
            {goBackLink && <GoBackButton onClick={goBack}>Go back to movie list</GoBackButton>}
            <Movie data={currentMovieInfo}>
                <AdditionalInfoButtons movieId={movieId}/>
            </Movie>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </> 
    );
};