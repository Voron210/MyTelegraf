import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Modal, Form, Button, ListGroup } from 'react-bootstrap'
import { getAllUser, getUserInDialog } from '../../http/userAPI'
import { Context } from '../../index'

const AddUser = ({ show, onHide }) => {

    const { dialoglist } = useContext(Context)
    const { user } = useContext(Context)
    const userInDialog = []

    useEffect(() => {
        getAllUser(dialoglist.dialogId).then(data =>
            userInDialog = data
        )
    }, [])

    useEffect(() => {
        getUserInDialog().then(data =>
            user.setList(data)
        )
    }, [])

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
                    Adding user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Now in this chat
                <ListGroup className="mt-2">
                    {userInDialog.map(item =>
                        <ListGroup.Item
                            style={{ cursor: "pointer" }}
                            key={item.id}
                        >
                            {item.nickname}
                        </ListGroup.Item>)}
                </ListGroup>
            </Modal.Body>
            <Modal.Body>
                Add someone
                <ListGroup className="mt-2">
                    {user.list.map(item =>
                        <ListGroup.Item
                            style={{ cursor: "pointer" }}
                            key={item.id}
                        >
                            {item.nickname}
                        </ListGroup.Item>)}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUser