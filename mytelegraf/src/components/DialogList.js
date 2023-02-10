import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroupItem, ListGroup } from "react-bootstrap"
import { Form, Row, Col, Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap'
import { Context } from "../index"


const DialogList = observer(() => {
    const { dialoglist } = useContext(Context)
    return (
        <Container>
            <Row className="me-auto">
                <div className="d-flex justify-content-end">
                    <Button>
                        Create new dialog
                    </Button>
                </div>
            </Row>
            <ListGroup className="mt-2">
                {dialoglist.dialoglist.map(item =>
                    <ListGroup.Item
                        style={{ cursor: "pointer" }}
                        key={item.id}>
                        {item.name}
                    </ListGroup.Item>)}

            </ListGroup>
        </Container>
        
    )
})

export default DialogList
