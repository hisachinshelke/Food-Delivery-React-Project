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
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h1 className="font-bold py-2 text-lg">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{restData.info.costForTwo}</h3>
      <h3>{restData.info.sla.slaString}</h3>
      <h3>{locality}</h3>
    </div>
  );
};

//higer order component
//input restcard and output is RestcardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    //component is a fucntion returning compont and component itseld returns a piece of jsx
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
