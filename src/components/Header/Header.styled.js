import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderTag = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #0d253f;
    border-bottom: 1px solid gray;
    box-shadow: 2px 3px 5px lightgrey;
  `;

export const Nav = styled.nav`
height: 30px;
width: 100%;
  max-width: 1920px;
  padding-left: 25px;
  padding-top: 20px;
  margin: 0 auto;
  background-color: #0d253f;
  `

export const HomeLink = styled(NavLink)`
margin-right: 20px;
font-size: x-large;
font-weight: bold;
color: #90cea1;

&.active{
    color: #fff;
};`

export const MovieLink = styled(NavLink)`
font-size: x-large;
font-weight: bold;
color: #90cea1;

&.active{
    color: #fff;
};`