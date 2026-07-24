import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeLayout, DashboardLayout, Error, Register, Login, Landing} from "./pages/index.js";


const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout/>,
        children:[
            {
                path: 'dashboard',
                element: <DashboardLayout/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
        ]
    },


    {
        path: '/landing',
        element: <Landing/>
    },
],)

function App() {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}

export default App
