import styles from "./GifCard.module.css";
const GifCard = ({ listGif }) => {
  const { title, url } = listGif;
  return (
    <div className={styles.card}>
      <img src={url} alt={title} className={styles.image} />
      <p>{title}</p>
    </div>
  );
};

export default GifCard;
