import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import CarCatalogue from "../../pages/CarCatalogue";


export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className=" bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="p-6 w-1/3 bg-white text-black dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-semibold">Welcome, {user.username}</h2>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
}
