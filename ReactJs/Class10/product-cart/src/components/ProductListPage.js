import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../reducers/productList.reducer";
import { addToCart } from "../reducers/cart.reducer";

const ProductListPage = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  const handleAddToCart = (e) => {
    const productId = e.target.dataset.id;
    dispatch(addToCart(productId));
  }

  return (
    <div class="container mx-auto my-8">
      <h1 class="text-3xl font-bold mb-6">Product Listing</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div class="bg-white p-4 shadow-md rounded-md">
            <img
              src={product.image}
              alt="Product 1"
              class="w-full h-32 object-cover mb-4"
            />
            <h2 class="text-lg font-bold">{product.title}</h2>
            <p class="text-gray-700 text-ellipsis overflow-hidden h-11">
              {product.description}
            </p>
            <span class="text-blue-500 font-bold mt-2">${product.price}</span>
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mx-2 hover:bg-blue-800"
              onClick={handleAddToCart}
              data-id={product.id}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
