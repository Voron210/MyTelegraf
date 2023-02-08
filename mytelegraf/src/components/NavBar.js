import React, { useContext } from 'react'
import { Context } from '../index'
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap'
import { HOME_ROUTE } from '../utils/consts'

const NavBar = () => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={HOME_ROUTE}>MyTelegraf</NavLink>
                <Nav className="me-auto">
                    <Nav.Link href="">Join</Nav.Link>
                    <Nav.Link href="">Registration</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar