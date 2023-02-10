import React from 'react'
import { Form, Row, Col, Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap'
import DialogList from '../components/DialogList';
import MenuBar from '../components/MenuBar';
import { useLocation } from 'react-router-dom'
import { DIALOG_ROUTE } from '../utils/consts';
import MessageList from '../components/MessageList';

const Dialog = () => {

    const location = useLocation()
    const isDialog = location.pathname === DIALOG_ROUTE

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <Container>
                        <Row className="mt-2">
                            {isDialog ? <DialogList /> : <MessageList />}
                        </Row>
                    </Container>
                    
                    
                </Col>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Dialog