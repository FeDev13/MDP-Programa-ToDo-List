export const Form = (props) => {
  const { tarea, handleSubmit, handleInput } = props;
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={tarea}
          className=" border-2 border-black border-solid rounded-md mx-auto"
        />
        <button
          onClick={handleSubmit}
          className=" mx-8 rounded-lg bg-blue-600 text-white p-3"
        >
          Agregar tarea
        </button>
      </form>
    </>
  );
};
