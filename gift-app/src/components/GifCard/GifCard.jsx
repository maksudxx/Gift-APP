const GifCard = ({ listGif }) => {
  const { title, url } = listGif;
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default GifCard;
