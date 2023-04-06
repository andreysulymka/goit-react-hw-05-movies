import React from "react";
import Header from "components/Header/Header";
import {Outlet} from "react-router-dom"
import { Main } from "components/Main/Main";

const Layout = () => {
    return (
    <>
            <Header />
            <Main>
            <Outlet />
            </Main>
    </>
)
}

export default Layout;