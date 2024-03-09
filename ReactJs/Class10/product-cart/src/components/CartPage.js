import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, decreaseQuantity, increaseQuantity, removeFromCart } from "../reducers/cart.reducer";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const productList = useSelector(state => state.products.list);
    const dispatch = useDispatch();

    const getProduct = (productId) => {
        return productList.find(product => product.id == productId);
    }

    const handleRemoveItem = (productId) => (e) => {
        dispatch(removeFromCart(productId));
    }

    const handleDecreaseQuantity = (productId) => () => {
        dispatch(decreaseQuantity(productId))
    }

    const handleIncreaseQuantity = (productId) => () => {
        dispatch(increaseQuantity(productId))
    }

    const handleQuantityChange = (productId) => (e) => {
        dispatch(changeQuantity({ productId, value: e.target.value }))
    }

    return (
        <div class="container mx-auto my-8">
        <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div class="grid grid-cols-1 gap-8">
            {
                Object.keys(cartItems).map(productId => (
                    <div class="bg-white p-4 shadow-md rounded-md flex">
                        <div className="basis-1/4">
                            <img src={getProduct(productId)?.image} alt="Product 1" class="w-full h-32 object-cover mb-4" />
                        </div>
                        <div>
                            <h2 class="text-lg font-bold">{getProduct(productId)?.title}</h2>
                            <p class="text-gray-700">{getProduct(productId)?.description}</p>
                            <span class="text-blue-500 font-bold mt-2">${getProduct(productId)?.price}</span>
                            <div class="flex items-center mt-4">
                                <label for="quantity1" class="mr-2">Quantity:</label>
                                <button onclick="decreaseQuantity('quantity1')" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md" onClick={handleDecreaseQuantity(productId)}>-</button>
                                <input type="number" id="quantity1" class="border rounded-md px-2 py-1 mx-2" value={cartItems[productId]} min="1" onChange={handleQuantityChange(productId)} />
                                <button onclick="increaseQuantity('quantity1')" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md" onClick={handleIncreaseQuantity(productId)}>+</button>
                            </div>
                            <button class="bg-red-500 text-white px-4 py-2 rounded-md mt-2" onClick={handleRemoveItem(productId)}>Remove</button>
                        </div>
                    </div>
                ))
            }

        </div>

        <div class="mt-8">
            <h2 class="text-xl font-bold mb-4">Total: $49.98</h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Checkout</button>
        </div>

    </div>

    )
}

export default CartPage;