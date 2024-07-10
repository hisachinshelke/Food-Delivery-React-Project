import RestaurantCard from "./RestaurantCard";
import restDataList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";

const Body = () => {
  //local state variable - super power using hooks - use states
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // resolve the promises
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //privided by browser engine

    //convert data to json - wait for promise to resovle and convert json
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listOfRestaurants.length == 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredResList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredResList);
            }}
          >
            Search
          </button>
        </div>

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
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
