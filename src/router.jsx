import { createBrowserRouter } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

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

            {
                path: "/home",
                element: <Home />
            }
        ]}
])

export default router;