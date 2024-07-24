import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo == null) return <ShimmerUI />;

  const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card;

  // const categories =
  //   restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.filter(
  //     (catg) =>
  //       catg.card?.card?.["@type"] ==
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  return (
    <div className="menu text-center">
      <div>
        <RestaurantCategory />
      </div>
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - ₹ {item.card?.info?.price / 100}
            Default price = ₹{" "}
            {item.card?.info?.price / 100 ||
              item.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
