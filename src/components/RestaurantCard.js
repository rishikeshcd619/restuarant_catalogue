import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import { UserContext } from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, locality, cloudinaryImageId } =
    props.data.info;

  const user = useContext(UserContext);

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addCart("pizza"));
  };
  return (
    <div className="bg-slate-300">
      <img
        className="w-52 p-3 flex center"
        src={CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <div className="p-3">
        <p>{name}</p>
        {/* <p className="flex flex-wrap">{cuisines.join(", ")}</p> */}
        <p>{avgRating}</p>
        <p>{locality}</p>
      </div>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export const PromotedRestuarandCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
