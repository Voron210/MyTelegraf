import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { Row, Container, Button, Modal, Form } from 'react-bootstrap'
import { getAllNews } from "../../http/newsApi"
import { Context } from "../../index"
import CreateNews from "../modals/CreateNews"


const News = observer(() => {
    const { user } = useContext(Context)
    const { newslist } = useContext(Context)
    const [newsVisible, setVisible] = useState(false)

    useEffect(() => {
        getAllNews().then(data => newslist.setNews(data))
    }, [])

    return (
        <Container>
            <ListGroup className="mt-2">
                {newslist.newslist.map(item =>
                    <ListGroup.Item
                        key={item.id}>
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter ">
                                {item.name}
                            </Modal.Title>
                            <div>
                                <Row >
                                    {item.createdAt.slice(0, 10)}
                                </Row>
                                <Row>
                                    {item.createdAt.slice(11, 16)}
                                </Row>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3 mt-2">
                                    {item.content}
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                    </ListGroup.Item>)}
            </ListGroup>
            {user.role = "Admin" ? 
            <Row className="me-auto mt-4">
                 <div className="d-flex justify-content-end">
                     <Button onClick={() => setVisible(true)}>
                         CreateNews
                     </Button>
                 </div>
            </Row>
            :null}
            <CreateNews show={newsVisible} onHide={() => setVisible(false)} />
        </Container>

    )
})

export default News
