import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Cliente = ( { cliente } ) => {

  const { nombre, empresa, email, telefono, id } = cliente

  return (
    <tr className="border-b-2 border-gray-200">

      <td className="p-6 text-center font-semibold space-y-3">

        <p className="text-lg text-slate-600 ">{ nombre }</p>

        <p className="font-normal text-base text-gray-500">{ empresa }</p>

      </td>

      <td className="p-6 text-center">
        
        <p className="text-gray-500">
          <span className="text-gray-800 font-bold mr-2">
          Email: 
          </span>
          { email } 
        </p>
        <p className="text-gray-500">
          <span className="text-gray-800 font-bold mr-2">
          Teléfono: 
          </span>
          { telefono } 
        </p>

      </td>

      <td className="p-6 flex gap-3 justify-center">

        <button className="bg-teal-200 hover:bg-teal-300 text-teal-800 rounded-md transition-all py-2 px-4 font-bold hover:shadow-md duration-300 flex items-center" type="button">
          <FontAwesomeIcon icon="fa-solid fa-pencil" />
          &nbsp;Editar
        </button>

        <button className="bg-red-100 hover:bg-red-200 text-red-800 rounded-md transition-all py-2 px-4 font-bold hover:shadow-md duration-300 flex items-center" type="button">
          <FontAwesomeIcon icon="fa-solid fa-trash" />
          &nbsp;Eliminar
        </button>

      </td>

    </tr>
  )
}

export default Cliente
