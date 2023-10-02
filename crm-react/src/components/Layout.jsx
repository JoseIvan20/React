import { Outlet, Link, useLocation } from "react-router-dom" // Outlet -> Va a actuar como un placeholder, como un contenedor dinámico y va a mantener la apariencia en cada uno de los componentes

const Layout = () => {

  const location = useLocation()
  
  return (
    <div className="md:flex md:min-h-screen">
        
        <aside className="md:w-1/5 bg-teal-800 px-5 py-7">

        <div className="flex">
          <img src="../../public/vite.svg" alt="Imagen React"></img> &nbsp;&nbsp;&nbsp;&nbsp;
          <h2 className="text-4xl font-black tetx-center text-white"> 
            CRM - Clientes 
          </h2>
        </div>

          <nav className="mt-10">
            {/* Link -> Sirve para optimizar la navegación a URL´s */}
            <Link className={ `${location.pathname === '/' ? 'text-teal-100 font-semibold' : 'text-white font-bold' } text-2xl block mt-2 transition-all hover:text-teal-200 text-white`} to="/"> 
              Clientes 
            </Link> 
            <Link className={ `${location.pathname === '/clientes/nuevos' ? 'text-slate-100 font-semibold' : 'text-white font-bold' } text-2xl block mt-2 transition-all hover:text-teal-200 text-white` } to="/clientes/nuevos"> 
              Nuevo Cliente 
            </Link>

          </nav>

        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll md:overflow-hidden"> 

          <Outlet />

        </main>

    </div>
  )
}

export default Layout
