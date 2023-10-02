// Usamos useNavigation
import { useNavigate, Form } from "react-router-dom"
// Importación de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Importamos el Formulario
import Formulario from "../components/Formulario"

// Creamos un export nombrado para ejecutar una función
export function action() {
  
  console.log("Submit al formulario...")

}

const NuevoCliente = () => {

  const navigate = useNavigate()

  console.log(navigate)

  return (
    <>
        
      <h1 className="font-bold text-4xl text-teal-500 mt-3"><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Nuevo Cliente </h1> 
      <p className="mt-3 font-medium text-xl"> Llena todos los campos para registrar un nuevo cliente </p>

      <div className="flex justify-end">

        <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-md transition-all py-2 px-4 font-bold hover:shadow-md duration-300" onClick={ () => navigate('/') }>
          <FontAwesomeIcon icon="fa-solid fa-rotate-left" /> 
          &nbsp;Volver 
        </button>

      </div>

      <div className="bg-white shadow-md rounded-md md:w-3/4 mx-auto px-5 py-6 mt-20">

        <Form method="POST">

          <Formulario />

          <div className="flex justify-center">

            <input type="submit" className="bg-teal-200 hover:bg-teal-300 text-teal-800 rounded-md transition-all py-2 px-4 font-bold hover:shadow-md duration-300 cursor-pointer" value="Registrar Cliente"></input>

          </div>

        </Form>

      </div>

    </>
  )
}

export default NuevoCliente
