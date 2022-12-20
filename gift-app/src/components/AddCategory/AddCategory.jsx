import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [input, setInput] = useState("");

  const onInputChanged = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length <= 1) return;
    //esta funcion agrega un nuevo valor a la lista
    onNewCategory(input)
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={input}
        onChange={onInputChanged}
      />
      {/* <input type="submit" value="Agregar"/> */}
    </form>
  );
};


