import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "redux/slices/userSlice";
import { Form } from "./Form";

export const LogIn = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        push("/");
      })
      .catch(console.error);
  };

  return <Form title="log in" handleClick={handleLogIn} />;
};
