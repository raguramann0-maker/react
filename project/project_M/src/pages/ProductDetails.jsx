import { useParams } from "react-router-dom";
import products from "../Data/Products";
import Sidebar from "../components/Sidebar";


function ProductDetails() {

  const { id } = useParams();

  const product = products.find((item) => item.id == id);

  // ADD TO CART FUNCTION

  const addToCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      existingItem.quantity += 1;

    } else {

      cart.push({
        ...product,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");
  };

  return (
    <div className="container">

      <Sidebar />

      <div className="details">

        <div className="details-card">

          <img src={product.image} alt="" />

          <h1>{product.name}</h1>

          <h2>₹ {product.price}</h2>

          <p><b>Problem:</b> {product.problem}</p>

          <p><b>Usage:</b> {product.usage}</p>

          <p><b>When Used:</b> {product.when}</p>

          <p><b>Dosage:</b> {product.dosage}</p>

          <p><b>Side Effects:</b> {product.sideEffects}</p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;