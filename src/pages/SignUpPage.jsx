import { SignUp } from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";
export const SignUpPage = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <SignUp />
      <p>
        Already have an accoun? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
