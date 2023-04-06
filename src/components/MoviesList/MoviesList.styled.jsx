import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
    color: #1e2a06;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 40px;
`;

export const StyledLink = styled(Link)`
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    color: #1e2a06;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const Li = styled.li`
    width: 100%;
    background-color: #0d253f;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 10px;
    color: #1e2a06;
    @media screen and (min-width: 768px) {
        width: 375px;
    }
    @media screen and (min-width: 1200px) {
        margin-top: 28px;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Img = styled.img`
    border-radius: 20px;
`;

export const Subtitle = styled.h3`
    color: #90cea1;
`