import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import LeftNav from '../NavBar/LeftNav';
import TopNav from '../NavBar/TopNav';
import styled from 'styled-components';
import ConsumerListPage from './../ConsumerList'
import OperationsListPage from './../OperationList'

const DashboardSection = styled.div`
    background-color: #F3F3F4;
    padding: 15px;
    height: calc(100% - 70px);
`
const LeftNavBar = styled.div`
    width: 70px;
`

export default function Dashboard({setLang}) {
    
    return (
        <div className="vh-100 vw-100">
            <Row className="no-gutters h-100">
                <LeftNavBar>
                    <LeftNav/>
                </LeftNavBar>
                <Col>
                    <TopNav setLang={setLang}/>
                    <DashboardSection>
                        <div className="bg-white h-100 p-5"> 
                            <ConsumerListPage/>
                            <OperationsListPage/>
                        </div>
                    </DashboardSection>
                </Col>
            </Row>
           
        </div>
    )
}
