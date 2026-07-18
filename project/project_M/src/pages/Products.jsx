import Sidebar from "../components/Sidebar";
import products from "../Data/Products";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {

  return (
    <div className="container">
      

      <Sidebar />

      <div className="products">

        <h1>Medical Madichines</h1>

        <div className="grid">

          {products.map((item) => (

            <div className="card" key={item.id}>

              <img src={item.image} alt="" />

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button>Add To Cart</button>

              <Link to={`/product/${item.id}`}>
                <button>View Details</button>
              </Link>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Products;