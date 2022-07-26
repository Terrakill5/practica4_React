/* import React from "react"; */
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={`w-[500px] min-h-[65px] my-[5px] mx-0 py-[8px] pr-[15px] pl-[20px] flex justify-between items-center rounded-[7px] border-[1px] border-solid border-[white] cursor-pointer [&:nth-child(3n+1)]:bg-[#1b1b32] [&:nth-child(3n+2)]:bg-[#2a2a40] [&:nth-child(3n+3)]:bg-[#3b3b4f] ${completada ? ' !bg-[#5a01a7] line-through' : ''}`}>
      <div className="w-full h-full text-[20px] flex items-center break-words"
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      {/* break-words funciona como "overflow-wrap:anywhere" que permite cortar la palabra si es necesario y sigue la palabra en la siguiente linea, es la mas semejante al codigo que se busca */}
      <div onClick={() => eliminarTarea(id)}> <AiOutlineCloseCircle className="w-[25px] h-[25px] m-[5px]" /> </div>
    </div>
  );
}

export default Tarea;
