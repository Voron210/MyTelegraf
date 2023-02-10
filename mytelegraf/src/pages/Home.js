import { Form, Row, Col, Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { DIALOG_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '../index'

const Home = () => {
    const { user } = useContext(Context)

    return (
        <div>
            <Container>
                <Col>
                    <h3 className="mt-5">
                        Privet, eto testovii proekt chatik, est' registraciya :D
                    </h3>
                    <Row>
                        <Form className=" d-flex justify-content-center align-items-center">
                            <Button href={user.isAuth ? DIALOG_ROUTE : REGISTRATION_ROUTE} className="btn-secondary btn-lg d-flex align-items-center" style={{ width: 200, height: 100 }}>
                                
                                <h2 className=" px-4 text-center">Let's play</h2>
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Home