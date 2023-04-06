import { PageContainer } from "components/pageContainer/pageContainer";
import React from "react";

import { HeaderTag, HomeLink, MovieLink, Nav } from "./Header.styled";


const Header = () => {
    return (
        <HeaderTag>
            <PageContainer>
    <Nav>
            <HomeLink to="/" end>Home</HomeLink>
            <MovieLink to="/movies">Movies</MovieLink>
                </Nav>
                </PageContainer>
        </HeaderTag>)
};

export default Header;