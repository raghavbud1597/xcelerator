import React from 'react';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import Desktop from './../images/desktop.png';

const NavBar = styled(Nav)`
    background-color: #2E4050;
`
const NavLink = styled.div`
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    &:hover{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }

    &.active{
        background-color: #243846;
        border-left: 4px solid #008E74;
    }
`
const NavBanner = styled.div`
    background-color: #243846;
    color: $white;
    padding 10px;
    width:100%;
    text-align: center;
`

export default function LeftNav() {
    return (
        <NavBar className="flex-column h-100 align-items-center">
            <NavBanner className="text-white py-3">
                <h3>X</h3>
            </NavBanner>
            <NavLink className="active">
                <img src={Desktop} alt="Dashboard Icon" height="20" width="20"/>
            </NavLink>
        </NavBar>
    )
}
