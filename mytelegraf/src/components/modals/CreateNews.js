import React, { useContext, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { createNews } from '../../http/newsApi'
import { Context } from '../../index'

const CreateNews = ({ show, onHide }) => {

    const { newslist } = useContext(Context)

    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const addNews = () => {
        createNews(name, content).then(data => {
            setName('')
            setContent('')
            onHide()
            newslist.addNews(data)
        }
        )
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create news
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Header"
                            autoFocus
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="What's new ?"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addNews}>Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateNews