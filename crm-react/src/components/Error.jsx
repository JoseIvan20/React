const Error = ( { children } ) => {
  return (
    <div className="space-y-3 hidden">

        { children }

    </div>
  )
}

export default Error

// 169. Diferencias de useLoaderData y useActionData y más validaciones
// Cuándo utilizar un useLoaderData y useActionData


// useLoaderData -> Cuándo quieras obtener el resultado de un loader
// useActionData -> Cuándo quieras obtener el resultado de un action



// 170. Introducción a JSON-Server
// Qué es una REST API
// REST => Representation State Transfer y puede ser diseñada en cualquier lenguaje. Una REST API debe responder a los Request HTTP: GET, POST, PUT, PATCH, DELETE
// Tiene una forma ordenada y estructurada de poner a disposición los recursos

// Verbos HTTP
// GET => Es utilizado para 'Obtener' registros de una BD, o de una API
// POST => Es utilizado para 'Envíar Datos al Servidor' y también se le conoce como 'Creación' 
// PUT / PATCH => Son utilizadas para 'Actualizar' un registro existente 
// DELETE => Es utilizado para 'Eliminar' un registro

// También un REST API sigue cierto formato en sus rutas o URL, se les conoce como 'END POINTS'
// * Una REST API cuenta con EndPoints (o URL's) para hacer operaciones CRUD
// * Supongamos que quieres 'Obtener' todos los clientes. Tendrías que envíar una petición GET hacía /clientes
// * Si quieres obtener un solo cliente, una petición GET hacía /clientes/10
// * Quieres 'Crear' un nuevo cliente? Una petición de tipo POST hacía la URL de clientes (/clientes)
// * Si quieres 'Editar' un cliente, utilizarás un 'Put' o un 'Patch' hacía /clientes/10 (/clientes/{y 'id' del cliente}) que deseas 'Actualizar'
// * Y si deseas 'Eliminar' un Cliente, será de tipo 'Delete' hacía /clientes/3 (7clientes/{y 'id' del cliente}) que seas 'Eliminar'
// Para poder usarlo:
    //1. Debemos ejecutar en consola(Administrador) 'npm install -g json-server' sin las comillas.
    // 2. Debemos crear un archivo llamado: 'db.json'
    // 3. Llenamos un JSON ejemplar
    // 4. en nuestra console de VSCode, donde estamos trabajando, colocamos el siguiente comando: npx json-server db.json --port 4000