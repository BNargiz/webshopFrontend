import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const { Link } = require("react-router-dom");

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>TheShop</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <input type="text"></input>
      <div id="btnRow">
        <Link to="/User">
          <FaRegUser />
        </Link>
        <Link to="/Cart">
          <div className="shopping-cart-icon">
            <FiShoppingCart />
            <div className="shopping-cart-icon-accumulator">{props.amount}</div>
          </div>
        </Link>
        <Link to="/Favorite">
          <FaRegHeart />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
