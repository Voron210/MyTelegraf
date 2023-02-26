import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { Row, Container, Button } from 'react-bootstrap'
import { getAllDialog } from "../../http/dialogApi"
import { Context } from "../../index"
import DialogStore from "../../store/DialogStore"
import CreateDialog from "../modals/CreateDialog"
import { useNavigate } from "react-router-dom"


const DialogList = observer(() => {
    const { dialoglist } = useContext(Context)
    const [dialogVisible, setVisible] = useState(false)
    const navigate = useNavigate()

    const handleClick = (id) => {
        dialoglist.setDialogId(id)
        navigate(`/${id}`);
    }

    useEffect(() => {
        getAllDialog().then(data => dialoglist.setDialog(data))
    }, [])

    return (
        <Container>
            <Row className="me-auto">
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={()=> setVisible(true) }
                    >
                        Create new dialog
                    </Button>
                </div>
            </Row>
            <ListGroup className="mt-2">

                {dialoglist.dialoglist.map(item =>
                    <ListGroup.Item
                        style={{ cursor: "pointer" }}
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                    >
                        {item.name}
                    </ListGroup.Item>)}

            </ListGroup>
            <CreateDialog show={dialogVisible} onHide={() => setVisible(false)} />
        </Container>
        
    )
})

export default DialogList
