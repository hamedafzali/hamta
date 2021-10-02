const NewsCard = ({ src, description, ...rest }) => {
  return (
    <div className="newsCard newsCardW " {...rest}>
      {/* <img src={src} alt="" className="newsCardImage" />
      <p>{description}</p> */}
    </div>
  );
};

export default NewsCard;
