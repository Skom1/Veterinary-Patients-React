import React from 'react';
import Paciente from "./Paciente";

// Ver el Responsive
function ListadoPacientes( {pacientes, setPaciente, eliminarPaciente} ) {

    return (
        <div className="md:w-1/2 lg:w-3/5 py-10 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ?
                (<>
                    <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra los {''}
                        <span className="text-blue-700 font-bold">pacientes</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>) :
                (<>
                    <h2 className="font-black text-3xl text-center">Sin pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes y {''}
                        <span className="text-blue-700 font-bold">apareceran</span>
                    </p>
                </>)
            }
        </div>
    );
}

export default ListadoPacientes;