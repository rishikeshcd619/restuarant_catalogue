import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="flex  justify-between bg-pink">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      <ul className="flex">
        <li className="mx-2">Home</li>
        <li className="mx-2">About us</li>
        <li className="mx-2">Contact us</li>
        <li className="bold mx-2">Cart ({cartItems.length})</li>
      </ul>
    </div>
  );
};

export default Header;
