import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    slaString,
    locality,
  } = restData?.info;
  return (
    <div className="rest-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{restData.info.costForTwo}</h3>
      <h3>{restData.info.sla.slaString}</h3>
      <h3>{locality}</h3>
    </div>
  );
};

export default RestaurantCard;
