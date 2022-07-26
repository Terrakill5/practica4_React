/* import Tarea from './componentes/Tarea'; */
import ListaDeTareas from './componentes/ListaDeTareas';

/* Aqui la aplicacion principal va a contener la Lista de tareas, que va a contener el formulario para agregar
una tarea nueva, que se presenta como TareaFormulario, y las demas tareas ya puestas anteriormente*/

function App() {
  return (
    <div className="flex flex-wrap justify-center items-center">
    <div className="w-[600px] min-h-[500px] bg-[#d0d0d5] p-[25px] m-[10px] rounded-[26px]">
      <h1 className="text-[#1b1b32] text-[25px] text-center my-[20px] mx-0 font-Roboto font-bold">Mis tareas</h1>
      {/* <Tarea texto='Aprender React' /> */}
      <ListaDeTareas />
    </div>
    </div>
  );
}

export default App;
