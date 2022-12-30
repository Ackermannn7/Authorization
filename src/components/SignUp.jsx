import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "redux/slices/userSlice";
import { Form } from "./Form";

export const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
  return <Form title="sign up" handleClick={handleSignUp} />;
};
