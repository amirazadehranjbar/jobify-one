import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeLayout, DashboardLayout, Error, Register, Login, Landing} from "./pages/index.js";
import { ThemeProvider } from "@/components/theme-provider.tsx"


const router = createBrowserRouter([

    {
        path: "/",
        element: <HomeLayout/>,
        errorElement:<Error/>,
        children: [
            {
                index: true,
                element: <Landing/>
            },
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
],)

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}>

            </RouterProvider>
        </ThemeProvider>

    )
}

export default App
