import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from "./pages/Inicio"
/* import Glosario from "./pages/Glosario"*/
import Planes from "./pages/Planes"
import Registro from './pages/Registro'
import Ingreso from './pages/Ingreso'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/registro",
        element: <Registro />
      },
      {
        path: "/ingreso",
        element: <Ingreso />
      },
      /* {
        path:"/glosario",
        element:<Glosario/>
      },*/
      {
        path: "/planes",
        element: <Planes />
      }
    ]
  }
])

function App() {
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App