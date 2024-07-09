import RestaurantCard from "./RestaurantCard";
import restDataList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable - super power using hooks - use states
  const [listOfRestaurants, setListOfRestaurants] = useState(restDataList);

  let listOfRestaurantsJS = [
    {
      info: {
        id: "765152",
        name: "Pizza Hut",
        cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
        locality: "Pimpri chinchwad",
        areaName: "Punawale",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        sla: {
          slaString: "30-35 mins",
        },
      },
    },
    {
      info: {
        id: "688719",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Rahatan",
        areaName: "Pimple Saudagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 3.5,
        parentId: "61955",
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
    {
      info: {
        id: "68719",
        name: "McDonlads",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Rahatan",
        areaName: "Pimple Saudagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.5,
        parentId: "61955",
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
