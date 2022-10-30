import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Root from "./components/Root";
import HomePage from "./pages/home/HomePage";



const router = createBrowserRouter([
    {
        path: "/",
        elemet: <Root />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
]);

export default router;