import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import LeftNav from '../NavBar/LeftNav';
import TopNav from '../NavBar/TopNav';
import styled from 'styled-components';

const DashboardSection = styled.div`
    background-color: #F3F3F4;
    padding: 15px;
    height: calc(100% - 70px);
`
const LeftNavBar = styled.div`
    width: 70px;
`

export default function Dashboard() {
    
    return (
        <div className="vh-100 vw-100">
            <Row className="no-gutters h-100">
                <LeftNavBar>
                    <LeftNav/>
                </LeftNavBar>
                <Col>
                    <TopNav/>
                    <DashboardSection>

                    </DashboardSection>
                </Col>
            </Row>
           
        </div>
    )
}
