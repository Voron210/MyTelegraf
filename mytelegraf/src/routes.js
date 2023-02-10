import Auth from "./pages/Auth"
import Dialog from "./pages/Dialog"
import Home from "./pages/Home"
import { DIALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MESSAGE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: DIALOG_ROUTE,
        Component: Dialog
    },
    {
        path: MESSAGE_ROUTE,
        Component: Dialog
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