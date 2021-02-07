import React from 'react';
import {
    Nav
} from 'react-bootstrap';
import Logout from './../images/logout.png';
import { useDispatch } from 'react-redux';
import {logout} from '../actions'
import styled from 'styled-components'

const Btn = styled.a`
    color: #212529;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

const NavBar = styled(Nav)`
    height: 70px;
    padding: 20px;
`

export default function TopNav() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logout());
      };
    return (
        <NavBar className="justify-content-end align-items-center">
            <Nav.Item>
                <Btn href="./" onClick={handleClick} className="ml-3">
                    <img src={Logout} alt="Logout Icon" height="15" width="15" className="mr-2"/>
                    Log out
                </Btn>
            </Nav.Item>
        </NavBar>
    )
}
