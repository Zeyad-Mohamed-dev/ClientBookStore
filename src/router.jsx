import { createBrowserRouter } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

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

        ]}
])

export default router;