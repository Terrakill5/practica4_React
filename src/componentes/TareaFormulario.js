import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
function TareaFormulario(props) {
    /* Aca, input va a modificarse cada vez que se escriba en el formulario, y ese input sera usado para crear una tarea */
    const [input, setInput ] = useState('');
    const manejarCambio = e => { /* Funcion que permite el cambio actualizado del input cada vez que el usuario escribe*/
        setInput(e.target.value);
    };
    const manejarEnvio = e => { /* Primero se evita que se actualice la pagina al hacer submit, luego se crea una tarea Nueva, donde se usa
    uuidv4 para crear un id unico para cada tarea. El texto que es representado por el input en el formulario
    y completada que sirve para saber si la tarea ya fue completada*/
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false,
        };
        /* onSubmit es un prop enviado por la lista de tareas, ella esperara hasta este punto por esta informacion y al llegar 
        se actualizara la tarea en la Lista de Tareas*/
        props.onSubmit(tareaNueva);
    };
    return (
        <form onSubmit={manejarEnvio} className='flex flex-wrap items-center justify-center'> {/* tarea-formulario */}
            <input className='w-[350px] text-[18px] bg-[white] py-[14px] pr-[32px] pl-[16px] rounded-l-[4px] border-[2px] border-solid border-[#00471b] outline-none text-[black]' type='text' placeholder='Escribe una Tarea' name='text' onChange={manejarCambio}/>{/*  tarea-input */}
                <button className='p-[16px] text-[18px] font-Roboto border-none rounded-r-[4px] cursor-pointer outline-none bg-[#00471b] text-[white] capitalize '> {/* tarea-boton */}
                    Agregar Tarea
                </button>
            
        </form>
    );
};

export default TareaFormulario;