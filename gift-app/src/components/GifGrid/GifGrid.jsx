import { useFetchGif } from "../../hooks/useFetchGifs";
import GifCard from "../GifCard/GifCard";

export const GifGrid = ({ category }) => {
  //custom hooks
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      {isLoading ? (
        <h3>Cargando....</h3>
      ) : (
        <>
          <h3>{category}</h3>
          <ol className="card-grid">
            {images.map((listGif) => (
              <GifCard listGif={listGif} key={listGif.id} />
            ))}
          </ol>
        </>
      )}
    </>
  );
};


