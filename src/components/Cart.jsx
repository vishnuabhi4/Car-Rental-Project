import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';
import CarList from './Data/CarList'

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();


const cartDetails = cartItems
  .map(item => {
    const car = CarList.find(car => String(car.id) === String(item.id));
    if (!car) return null;

    return {
      id: car.id,
      title: car.name,               // 👈 renamed
      image: car.images[0] || null,  // 👈 first image
      price: car.pricePerDay,        // 👈 renamed
      quantity: item.quantity,
    };
  })
  .filter(Boolean);

  
  return (
    <div className="p-4">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <ul>
  {cartDetails.map(item => (
    <li key={item.id} className="border p-4 rounded shadow">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
      <p className="text-gray-700">Price: ${item.price}</p>
      <p className="text-gray-600">Quantity: {item.quantity}</p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </li>
  ))}
</ul>

      )}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
 