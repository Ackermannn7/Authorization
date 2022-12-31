import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "redux/slices/userSlice";
import "./style.css";

export const LogInForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const push = useNavigate();

  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#8a92f5" };
  const formStyle = { marginBottom: "10px" };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          setUser({
            email: email,
            password: password,
          })
        );
        push("/");
      })
      .catch(console.error);
  };
  return (
    <Grid className="signup">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Log in</h2>
        </Grid>
        <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
          <div style={formStyle}>
            <TextField
              className="form__input"
              fullWidth
              label="Email"
              variant="standard"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              className="form__input"
              required
              fullWidth
              label="Password"
              variant="standard"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Log in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
