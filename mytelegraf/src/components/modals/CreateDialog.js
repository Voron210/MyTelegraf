import React, { useContext, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { createDialog } from '../../http/dialogApi'
import { Context } from '../../index'

const CreateDialog = ({ show, onHide }) => {

    const { dialoglist } = useContext(Context)

    const [name, setName] = useState('')
    const addDialog = () => {
        createDialog(name).then(data => {
            setName('')
            onHide()
            dialoglist.addDialog(data)
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
                    Create Dialog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Best Dialog"
                            autoFocus
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addDialog}>Create</Button>
            </Modal.Footer>
        </Modal>
        )
}

export default CreateDialog