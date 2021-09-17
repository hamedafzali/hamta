const NewsCard = ({ src, description }) => {
  return (
    <div className="newsCard newsCardW">
      <img src={src} alt="" className="newsCardImage" />
      <p>{description}</p>
    </div>
  );
};

export default NewsCard;
