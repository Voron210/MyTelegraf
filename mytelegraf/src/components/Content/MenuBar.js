import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { Context } from "../../index"



const MenuBar = observer(() => {
    const { menulist } = useContext(Context)
    const navigate = useNavigate()

    const click = (route) => {
        navigate(route)
    }

    return (
        <ListGroup className="mt-5 pt-2">
            {menulist.menu.map(item =>
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => 
                        click(item.route)
                        //menulist.setSelectedMenu(item)
                        }
                    //active={menulist.selectedMenu == item}
                    key={item.id}>
                    {item.name}
                </ListGroup.Item>)}
            
        </ListGroup>
        )
})

export default MenuBar
