const NewsCard = ({ src, description, ...rest }) => {
  return (
    <div
      className="newsCard  "
      {...rest}
      onClick={() => window.open("/newsdetail")}
    >
      <img src={src} alt="" className="newsCardImage" />
      <p>{description}</p>
    </div>
  );
};

export default NewsCard;
