import { useState } from "react";
import styles from './AddCategory.module.css'

export const AddCategory = ({ onNewCategory }) => {
  const [input, setInput] = useState("");

  const onInputChanged = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length <= 1) return;
    //esta funcion agrega un nuevo valor a la lista
    onNewCategory(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs..."
        value={input}
        onChange={onInputChanged}
        className={styles.search}
      />
    </form>
  );
};
