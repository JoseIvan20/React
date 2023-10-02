import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Importamos el React Router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importamos el Layout
import Layout from './components/Layout'
// Importamos NuevoCliente
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
// Importamos el Index
import Index, { loader as clientesLoader } from './pages/Index' // loader as clientesLoader, lo renombramos con as
// Importamos FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const router = createBrowserRouter( [ // createBrowserRouter toma un arreglo en el cuál vas definiendo tus diferentes rutas por medio de un objeto

  {
    
    path: '/', // path -> La forma en que vas definiendo las URL´s
    element: <Layout />, // element -> Es lo que va a mostrar en pantalla y esto puede ser código HTML o también puede ser componente. Tengo que definir el children 
    children: [ 

      {

        index: true, // index -> Es la parte que se tiene que renderizar en la vista
        element: <Index />,
        loader: clientesLoader

      },
      
      {

      // Aquí vamos a aplicar el layout, heredará el diseño, y lo que le pases como element es lo que se inyecta en <Outlet />
      path: '/clientes/nuevos',
      element: <NuevoCliente />,
      library: library.add(fas),
      action: nuevoClienteAction

      } 
    ]

  }

] ) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider 
      router = { router }
    />
  
  </React.StrictMode>,
)
