import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root/Root";

import Login from "../Login/Login";
import ClientListContainer from "../containers/ClientListContainer/ClientListContainer";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";
import NewClient from "../containers/NewClient/NewClient";
import NewCuarto from "../containers/NewCuarto/NewCuarto";
import CuartoDetail from "../containers/CuartoDetail/CuartoDetail";
import ClienteDetail from "../containers/ClienteDetail/ClienteDetail";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Root />,
        errorElement: <h2>Página no encontrada</h2>,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/inicio",
                element: [<NavBar/>,<ItemListContainer/>]
                
            },
            {
                path: "/clientes",
                element: [<NavBar/>,<ClientListContainer/>]
                
            },
            {
                path: "/nuevocliente",
                element: [<NavBar/>,<NewClient/>]
                
            },
            {
                path: "/nuevocuarto",
                element: [<NavBar/>,<NewCuarto/>]
                
            },
            {
                path: "/category/:categoryId",
                element: [<NavBar/>,<ItemListContainer/>]
                
            },
            {
                path: "/cliente/:idCliente",
                element: [<NavBar/>,<ClienteDetail/>]
                
            },
            {
                path: "/cuarto/:idCuarto",
                element: [<NavBar/>,<CuartoDetail/>]
                
            }
        ],
    },

]);

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router;