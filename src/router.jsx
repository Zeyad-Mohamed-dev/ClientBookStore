import { createBrowserRouter } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Adminboard from "./pages/Adminboard";

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
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/admin",
                element: <Adminboard />
            }

        ]}
])

export default router;