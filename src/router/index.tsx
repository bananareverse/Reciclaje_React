import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, CellPhonePage, HomePage, ReciclajePage } from "../pages";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: "reciclaje",
            element: <ReciclajePage/>,
        },
        {
            path: "celulares/:slg",
            element: <CellPhonePage/>,
        },
        {
            path: "nosotros",
            element: <AboutPage/>,
        }
    ]
    },
])
