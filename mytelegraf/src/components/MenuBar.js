import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroupItem, ListGroup } from "react-bootstrap"
import { Context } from "../index"
import { DIALOG_ROUTE } from "../utils/consts"
import { useLocation } from 'react-router-dom'


const MenuBar = observer(() => {
    const { menulist } = useContext(Context)
    return (
        <ListGroup className="mt-5 pt-2">
            {menulist.menu.map(item =>
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        menulist.setSelectedMenu(item)
                    }
                    active={menulist.selectedMenu == item}
                    key={item.id}>
                    {item.name}
                </ListGroup.Item>)}
            
        </ListGroup>
        )
})

export default MenuBar
