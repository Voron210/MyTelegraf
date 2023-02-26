import React, { useContext } from 'react'
import { Context } from '../index'
import { Nav, Navbar, Container, NavLink, Button, Card } from 'react-bootstrap'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Button style={{ color: 'white' }} href={HOME_ROUTE}>MyTelegraf</Button>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <div style={{ color:'white' }} className="my-auto">
                            {user.nickname }
                        </div>
                        <Button variant={"btn btn-secondary"} className="ms-3" onClick={() => logOut()} >Logout</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" >
                        <Button variant={"btn btn-secondary"} onClick={() => navigate(REGISTRATION_ROUTE)} >Registration</Button>
                        <Button variant={"btn btn-secondary"} onClick={() => navigate(LOGIN_ROUTE)} className="ms-3" >Login</Button>
                    </Nav>
                    }
            </Container>
        </Navbar>
    );
})

export default NavBar