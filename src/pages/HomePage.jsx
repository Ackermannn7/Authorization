import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "redux/slices/userSlice";
export const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div>
      <h1>Home Page</h1>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <p>
        Or <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};
