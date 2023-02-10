import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroupItem, ListGroup } from "react-bootstrap"
import { Form, Row, Col, Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap'
import { Context } from "../index"


const MessageList = observer(() => {
    const { messagelist } = useContext(Context)
    return (
        <Container>
            <Row className="me-auto">
                <div className="d-flex justify-content-start">
                    <Button href="/dialog">
                        Back
                    </Button>
                </div>
            </Row>
            <ListGroup style={{ height: window.innerHeight - 300} } className="mt-2">
                {messagelist.messagelist.map(item =>
                    <ListGroup.Item
                        style={{ cursor: "pointer" }}
                        key={item.id}>
                        {item.name}
                    </ListGroup.Item>)}

            </ListGroup>
            <Row>
                <div className="pt-3 form-group d-flex justify-content-start ">
                    <input className="form-control" placeholder="Send message" />
                    <Button>
                        Send
                    </Button>
                </div>
            </Row>
        </Container>
        
    )
})

export default MessageList
