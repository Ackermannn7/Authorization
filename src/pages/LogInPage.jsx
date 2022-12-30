import { LogIn } from "components/LogIn";
import React from "react";
import { Link } from "react-router-dom";
export const LogInPage = () => {
  return (
    <div>
      <h1>Log in</h1>
      <LogIn />
      <p>
        Or <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};
