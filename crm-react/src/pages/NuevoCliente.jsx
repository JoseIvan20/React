// Usamos useNavigation
import { useNavigate, Form, useActionData } from "react-router-dom"
// Importación de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Importamos el Formulario
import Formulario from "../components/Formulario"
// Importamos el error
import Error from "../components/Error"
// SweetAlert
import Swal from "sweetalert2"


// Creamos un export nombrado para ejecutar una función
export async function action ( { request } ) { // request -> Es una petición que realizas hacía una acción
  
  console.log(request)
  const formData = await request.formData() // Está función la haremos asincrona, para evitar el tardado en procesar

  // console.log( formData.get ( 'nombre' ) ) // Forma de revisar un FormData (1)
  // console.log( [ ...formData ] ) // Forma de revisar un formData (2)
  
  const datos = Object.fromEntries( formData )
  //console.log(datos) // Forma de revisar un formData (3)

  // Validaremos campos en específico
  const email = formData.get('email')

  // Validación
  const errores = [];
  if ( Object.values( datos ).includes('') ) {

    errores.push('Todos los campos son obligatorios.')

  }

  // Valiación con regex
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if ( !regex.test(email) ) { // .test -> es un método que existe cuando creas un expresión regular 
    errores.push('El email no es válido.')
    
  }

  const erroresHtml = errores.join('<br>')

  // Retornar datos si hay errores 
  if ( Object.keys( errores ).length ) {

    Swal.fire( {

      icon: 'error',
      title: 'Errores en Formulario',
      html: erroresHtml

    } )

    return errores;

  }

}

const NuevoCliente = (  ) => { 

  // Usaremos useActionData ya que tenemos en uso un 'action'
  const errores = useActionData()
  const navigate = useNavigate()

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

        { errores?.length && errores.map( ( error, i  ) => 
            <Error key={ i }> 
          
              { error } 
          
            </Error> )
        }

        <Form method="POST" noValidate>

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
