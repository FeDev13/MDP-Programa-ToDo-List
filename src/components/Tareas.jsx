import { useState } from "react";

export const Tareas = (props) => {
  const { tarea, updateTask, deleteTask } = props;
  const [edit, setEdit] = useState(false); //estado para manejar el actualizar

  const Editar = () => {
    const [valor, setValor] = useState(tarea.tarea); //arranca el estado con el valor tarea del objeto tarea

    const handleChange = (e) => {
      const texto = e.target.value;
      setValor(texto);
    };
    const handleClick = (e) => {
      e.preventDefault;
      updateTask({
        id: tarea.id,
        tarea: valor,
        hecho: false,
      });
      setEdit(false);
    };

    return (
      <>
        <input
          type="text"
          value={valor}
          onChange={handleChange}
          className=" text-black"
        />
        <button onClick={handleClick}>Guardar</button>
        <button onClick={() => deleteTask(tarea.id)}>Borrar</button>
      </>
    );
  };

  const NoEditar = () => {
    return (
      <>
        <span>{tarea.tarea}</span>
        <button
          className=" bg-green-700 rounded-md p-3 mx-10"
          onClick={() => setEdit(true)}
        >
          Editar
        </button>
        <button
          className=" bg-red-500 rounded-md p-3"
          onClick={() => deleteTask(tarea.id)}
        >
          Eliminar
        </button>
      </>
    );
  };

  return (
    <div className=" bg-violet-900 text-white w-[50%] rounded-lg p-3 my-3 mx-auto">
      {edit ? <Editar /> : <NoEditar />}
    </div>
  );
};
