import { useState } from "react";
import { Form } from "./components/Form";

import "./App.css";
import { Tareas } from "./components/Tareas";

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
    console.log(tarea);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea === "") {
      alert("debe ingresar tareas");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      hecho: false,
    };
    const aux = [nuevaTarea, ...listaTareas];
    setListaTareas(aux);
    setTarea("");
    console.log(listaTareas);
  };

  const updateTask = (objediTask) => {
    const { id, tarea } = objediTask;
    const arr = [...listaTareas];
    const elemento = arr.find((item) => item === id);
    elemento.tarea = tarea;
    setListaTareas(arr);
  };

  const deleteTask = (id) => {
    const aux = listaTareas.filter((item) => item.id !== id);
    setListaTareas(aux);
  };
  return (
    <>
      <h1 className=" text-white text-3xl my-10">Lista de tareas</h1>
      <Form
        tarea={tarea}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <div className=" flex flex-col justify-center text-center">
        {listaTareas.map((tarea) => {
          return (
            <Tareas
              id={tarea.id}
              tarea={tarea}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
