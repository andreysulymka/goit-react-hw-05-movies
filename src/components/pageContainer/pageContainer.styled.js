import styled from "styled-components";

export const PageContainerDiv = styled.div`
    margin: 0 auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (max-width: 100%){
        max-width: 768px;
    }
    @media screen and (max-width: 768px){
        max-width: 480px;
    }
    @media screen and (max-width: 480px){
        width: 100%;
    }
`;