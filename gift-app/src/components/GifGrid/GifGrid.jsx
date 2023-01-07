import { useFetchGif } from "../../hooks/useFetchGifs";
import GifCard from "../GifCard/GifCard";
import styles from "./GifGrid.module.css";

export const GifGrid = ({ category}) => {
  console.log(category);
  //custom hooks
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      {isLoading ? (
        <h3>Cargando....</h3>
      ) : (
        <>
          <div className={styles.title}>
            <h3>{category}</h3>
          </div>
          <ol className={styles.containerGifs}>
            {images.map((listGif) => (
              <GifCard listGif={listGif} key={listGif.id} />
            ))}
          </ol>
        </>
      )}
    </>
  );
};
