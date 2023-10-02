// Uso del Hook -> useLoaderData
import { useLoaderData } from "react-router-dom";
// Componente de Cliente
import Cliente from "../components/Cliente";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Esto es un export nombrado
export function loader() { // -> Es una función que se va ejecutar cuando un componente cargue y es ideal para cargar un estado o para consultar alguna API y obtener resultados.

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;

}

const Index = () => {

  const clientes = useLoaderData()

  return (
    <p>

     <h1 className="font-bold text-4xl text-teal-500 mt-3"> <FontAwesomeIcon icon="fa-solid fa-users" /> Clientes </h1> 
     <p className="mt-3 font-medium text-xl"> Administra tus Clientes </p>

      {clientes.length ? (

        <table className="w-full bg-white rounded-md shadow-md mt-5 table-auto">
          
          <thead className="bg-teal-800 text-white">

            <tr>
              
              <th className="p-2"> Cliente </th>
              <th className="p-2"> Contacto </th>
              <th className="p-2"> Acciones </th>

            </tr>

          </thead>
          <tbody>
            {/* Contenido de tabla */}
            { clientes.map( cliente => (
              <Cliente 
                cliente={ cliente }
                key={ cliente }
              />
            ) ) }
          </tbody>
          
        </table>

      ) : (

        <p className="text-center mt-10 bg-red-100 text-red-800"> No hay clientes aún </p>

      ) }
      
    </p>
  )
}

export default Index // Export default
