import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";


const mainRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <LandingPage></LandingPage>
            },
            {
                path:'login',
                element: <Login></Login>
            }
        ]
    }
])

export default mainRouter;