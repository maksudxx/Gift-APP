import { useState } from "react";
import {AddCategory, GifGrid} from "../../components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GIF Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};


export default GifExpertApp;