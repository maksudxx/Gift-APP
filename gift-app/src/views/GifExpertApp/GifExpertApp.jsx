import { useState } from "react";
import { AddCategory, GifGrid } from "../../components";
import styles from "./GifExpertApp.module.css";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  // const deleteCategory = (cat) => {
  //   setCategories(categories.filter((f) => f !== "Dragon Ball"));
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>GIF Expert App</h2>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category, index) => (
        <>
          <GifGrid key={index} category={category} />
        </>
      ))}
    </div>
  );
};

export default GifExpertApp;
