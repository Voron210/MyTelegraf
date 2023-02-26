import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ListGroupItem, ListGroup } from "react-bootstrap"
import { Form, Row, DropdownButton, Dropdown, FloatingLabel, Container, Col, Button } from 'react-bootstrap'
import { getAllMessage } from "../../http/messageApi"
import { Context } from "../../index"
import { useParams } from "react-router-dom"
import '../../styles/scrollbar.css'
import '../../styles/prbutton.css'
import AddUser from "../modals/AddUser"

const socket = new WebSocket('ws://localhost:3001/api')


socket.onmessage = (e) => {
    console.log('new message',e.data)
}



const MessageList = observer(() => {
    const params = useParams();
    const [message, setMessage] = useState('')
    const { user } = useContext(Context)
    const { dialoglist } = useContext(Context)
    const [userVisible, setVisible] = useState(false)

    dialoglist.setDialogId(params.id)

    socket.onopen = () => {
        socket.send(JSON.stringify({
            method: "connection",
            id: user.id,
            username: user.nickname,
        }))
        console.log('Connected')
    }

    useEffect(() => {
        getAllMessage(dialoglist.dialogId).then(data => {
            messagelist.setMessages(data)
            //console.log(data)
        })
    }, []) //dialoglist.dialogId

    const { messagelist } = useContext(Context)
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-start">
                    <Button className="prbutton" href="/dialog">
                        Back
                    </Button>
                </Col>
                <Col className="d-flex justify-content-center">
                    Dialog_name
                </Col>
                <Col className="d-flex justify-content-end">
                    <DropdownButton id="dropdown-variants-Secondary" title="***">
                        <Dropdown.Item
                            onClick={() => setVisible(true)}
                        >User in dialog</Dropdown.Item>
                        <Dropdown.Item>Change name</Dropdown.Item>
                        <Dropdown.Item>Something else :D</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Delete dialog</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <ListGroup
                style={{ height: '400px', overflowY: 'scroll' }}
                className="mt-2 scrollbar"
            >
                {messagelist.messagelist.map(item =>
                    <ListGroup.Item
                        style={{ cursor: "pointer" }}
                        key={item.id}
                        className={item.userId === user.user.id ? "d-flex justify-content-end" :"d-flex justify-content-start" }
                    >
                        
                        {item.message}
                        {item.user.nickname}
                    </ListGroup.Item>)}

            </ListGroup>
            <Row>
                <Container className="pt-3 d-flex justify-content-center">
                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                        <Form.Control
                            as="textarea"
                            value={message}
                            style={{ height: '60px' }}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button
                        className="prbutton"
                        onClick={() =>
                            socket.send(JSON.stringify({
                                method: "message",
                                id: user.user.id,
                                username: user.nickname,
                                content: message,
                                dialogId: dialoglist.dialogId
                            }))
                        }>
                        Send
                    </Button>
                </Container>
            </Row>
            <AddUser show={userVisible} onHide={() => setVisible(false)} />
        </Container>
        
    )
})

export default MessageList
