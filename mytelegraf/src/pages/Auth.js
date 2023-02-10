import React, { useContext, useState } from 'react'
import { Nav, Navbar, Container, NavLink, Button, Form, Card, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { login, registration, nickname } from '../http/userAPI'
import { Context } from '../index'
import { DIALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'


const Auth = () => {
    const location = useLocation()
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password, nickname)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(DIALOG_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (isLogin ?
        //Окно для входа (Кнопка регистрации переходит к окну регистрации)
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card className="mx-auto" style={{ width: 500 }} className="p-3">
                <Form>
                    <h2 className="d-flex justify-content-center" >Authorization</h2>
                    <div className="pt-1 form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="pt-1 form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <Row className="mt-4 mx-auto d-flex justify-content-between">
                        <Button onClick={click} style={{ width: 150 }}  className="mx-auto btn-secondary">Login</Button>
                        <Button href={REGISTRATION_ROUTE} style={{ width: 150 }} className="mx-auto btn-secondary btn-lg">Registration</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
        :
        //Окно для регистрации (Кнопка логин вовзращает к окну логина)
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>
            <Card className="mx-auto" style={{ width: 500 }} className="p-3">
                <Form>
                    <h2 className="d-flex justify-content-center" >Registration</h2>
                    <div className="pt-1 form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="pt-1 form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="pt-1 form-group">
                        <label htmlFor="exampleInputPassword1">Nickname</label>
                        <input className="form-control" placeholder="Enter nickname"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)} />
                    </div>
                    <Row className="mt-4 mx-auto d-flex justify-content-between">
                        <Button onClick={click} style={{ width: 150 }} className="mx-auto btn-secondary">Registration</Button>
                        <Button href={LOGIN_ROUTE} style={{ width: 150 }} className="mx-auto btn-secondary btn-lg">Login</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}

export default Auth