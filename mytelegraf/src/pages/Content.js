import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import DialogList from '../components/Content/DialogList';
import MenuBar from '../components/Content/MenuBar';
import { useLocation } from 'react-router-dom'
import { COMINGSOON, DIALOG_ROUTE, MESSAGE_ROUTE, USER_ROUTE } from '../utils/consts';
import MessageList from '../components/Content/MessageList';
import { getAllDialog } from '../http/dialogApi';
import DialogStore from '../store/DialogStore';
import UserList from '../components/Content/UserList';
import ComingSoon from '../components/Content/ComingSoon';

const Content = () => {

    const location = useLocation()
    //const isDialog = location.pathname === DIALOG_ROUTE

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <Container>
                        <Row className="mt-2">
                            {(() => {
                                switch (location.pathname) {
                                    case DIALOG_ROUTE:
                                        return <DialogList />;
                                    case MESSAGE_ROUTE:
                                        return <MessageList />;
                                    case USER_ROUTE:
                                        return <UserList />;
                                    case COMINGSOON:
                                        return <ComingSoon />;
                                    default:
                                        return <MessageList/>;
                                }
                            })()}
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

export default Content