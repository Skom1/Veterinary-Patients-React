import React from 'react';

function Paciente( {paciente, setPaciente, eliminarPaciente} ) {

    const { nombre, propietario, email, alta, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm ('Deseas Eliminar el Paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {""}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Descripcion: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex">
                <button
                    type="button"
                    className= "py-3 px-8 bg-blue-700 rounded-lg font-bold hover:bg-blue-600 text-white uppercase mx-2"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-3 px-8 bg-red-700 rounded-lg font-bold hover:bg-red-600 text-white uppercase mx-2"
                    onClick={() => eliminarPaciente(id)}
                >Eliminar</button>
            </div>

        </div>
    );
}

export default Paciente;