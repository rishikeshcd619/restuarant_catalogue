import { useEffect, useState } from "react";
import RestaurantCard, { PromotedRestuarandCard } from "./RestaurantCard";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
  const [staticRestuarantList, setStaticRestaurantList] = useState([]);
  const [restuarantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState(null);

  const PromotedLabelledRestuarandCard = PromotedRestuarandCard(RestaurantCard);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const result = await fetch(RESTAURANT_LIST_URL);
    const json = await result.json();

    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setStaticRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return (
    <div className="body">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="top-rated-btn"
        onClick={() => {
          const filteredList = staticRestuarantList.filter((resturant) =>
            resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setRestaurantList(filteredList);
        }}
      >
        Search
      </button>

      <button
        className="top-rated-btn"
        onClick={() => {
          const filteredList = staticRestuarantList.filter(
            (resturant) => resturant.info.avgRating > 4
          );
          setRestaurantList(filteredList);
        }}
      >
        Top Rated
      </button>
      <div className="flex flex-wrap">
        {restuarantList.map((resturant) => (
          <div className="m-3">
            {resturant?.info?.isOpen ? (
              <PromotedLabelledRestuarandCard data={resturant} />
            ) : (
              <RestaurantCard data={resturant}></RestaurantCard>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
