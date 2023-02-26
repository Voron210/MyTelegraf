import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { ListGroup } from "react-bootstrap"
import { Row, Container, Button } from 'react-bootstrap'
import { getAllUser } from "../../http/userAPI"
import { Context } from "../../index"


const UserList = observer(() => {
    const { user } = useContext(Context)
    const [userVisible, setVisible] = useState(false)

    useEffect(() => {
        getAllUser().then(data =>
            user.setList(data)
        )
    }, [])

    
    return (
        <Container>
            <ListGroup className="mt-2">
                {user.list.map(item =>
                    <ListGroup.Item
                        style={{ cursor: "pointer" }}
                        key={item.id}
                    >
                        {item.nickname}
                    </ListGroup.Item>)}
            </ListGroup>
        </Container>

    )
})

export default UserList
