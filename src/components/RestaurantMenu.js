import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  console.log({ resId });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId //+ "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json.data.cards[2].card.card.info.name);
    setRestaurantInfo(json.data);
    console.log("sdcscs");
    console.log(restaurantInfo);
    //console.log(restaurantInfo);
    //  console.log(restaurantInfo?.cards[2].card.card.info.name);
  };

  if (restaurantInfo == null) return <ShimmerUI />;

  const { name, cuisines, cloudinaryImageId, costForTwo, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card;

  console.log(itemCards);
  // return restaurantInfo == null ? (
  //   <ShimmerUI />
  // ) :
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li> */}

        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - ₹ {item.card?.info?.price / 100}
          </li>
        ))}

        {/* <li>Burgers</li>
        <li>Chapati</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
