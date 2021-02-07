import React from 'react';
import {
    Nav,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import Logout from './../images/logout.png';
import { useDispatch } from 'react-redux';
import {logout} from '../actions'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { LOCALES} from './../i18n';

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

export default function TopNav({setLang}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch(logout());
        history.push("/");
      };
    return (
        <NavBar className="justify-content-end align-items-center">
            <Nav.Item>
                <DropdownButton id="language-dropdown" title="Language Dropdown">
                    <Dropdown.Item href="#" onClick={()=> setLang(LOCALES.ENGLISH)}>English</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=> setLang(LOCALES.GERMAN)}>German</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=> setLang(LOCALES.FRENCH)}>French</Dropdown.Item>
                </DropdownButton>
            </Nav.Item>
            <Nav.Item>
                <Btn href="#" onClick={handleClick} className="ml-3">
                    <img src={Logout} alt="Logout Icon" height="15" width="15" className="mr-2"/>
                    Log out
                </Btn>
            </Nav.Item>
        </NavBar>
    )
}
