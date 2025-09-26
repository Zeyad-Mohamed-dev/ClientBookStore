import { createBrowserRouter } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
            {
                index: true,
                element: <Login />
            },
            
            {
                path: "/register",
                element: <Register />
            },

        ]}
])

export default router;