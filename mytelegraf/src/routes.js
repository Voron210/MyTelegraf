import Auth from "./pages/Auth"
import Content from "./pages/Content"
import Home from "./pages/Home"
import { COMINGSOON, DIALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MESSAGE_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: DIALOG_ROUTE,
        Component: Content
    },
    {
        path: MESSAGE_ROUTE,
        Component: Content
    },
    {
        path: USER_ROUTE,
        Component: Content
    },
    {
        path: COMINGSOON,
        Component: Content
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth 
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]