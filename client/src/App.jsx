import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout.tsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout/>
    },

    {
        path: '/about',
        element: (
            <div>
                <h2>about page</h2>
            </div>
        ),
    },
],)

function App() {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}

export default App
