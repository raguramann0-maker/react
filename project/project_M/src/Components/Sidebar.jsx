import { Link } from "react-router-dom";
import "./Side.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Medical App</h2>

      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Sidebar;