import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
    color: #01b4e4;
    background-color: #1e2a06;
   padding: 10px;
   border-radius: 20px;
   width: 120px;
   display: block;
    &.active {
        color: #fff;
        background-color: #01b4e4;
        font-weight: 700;
    }
`;

export const Ul = styled.ul`
   display: flex; 
   justify-content: space-around;
   gap: 1px;
`;

export const Li = styled.li`
   padding: 10px;
   margin: 10px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-width: 300px;
    margin: 20px auto;
    border-radius: 20px;
   color: #fff;
    background-color: #0d253f;
    //border: 10px solid transparent;
    //border-image: 10 repeating-linear-gradient(45deg, #A7CECC, #A7CECC 10px, transparent 10px, transparent 20px, #F8463F 20px, #F8463F 30px,transparent 30px, transparent 40px);
`;