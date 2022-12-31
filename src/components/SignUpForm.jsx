import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import MuiPhoneNumber from "material-ui-phone-number";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { useDispatch } from "react-redux";
import { setUser } from "redux/slices/userSlice";

export const SignUpForm = () => {
  const [obj, setObj] = React.useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    birthDate: dayjs("2014-08-18T21:11:54"),
    password: "",
  });

  const push = useNavigate();

  const handleChangeState = (data, field) => {
    setObj((obj) => ({ ...obj, [field]: data }));
  };

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
    const { email, password, firstName, secondName, phoneNumber, birthDate } =
      obj;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          setUser({
            email: email,
            password: password,
            firstName: firstName,
            secondName: secondName,
            phoneNumber: phoneNumber,
            birthDate: birthDate,
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
          <Avatar style={avatarStyle}>
            <AddCircleTwoToneIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign up</h2>
        </Grid>
        <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
          <div style={formStyle}>
            <TextField
              className="form__input"
              required
              fullWidth
              label="First Name"
              variant="standard"
              value={obj.firstName}
              onChange={(e) => {
                handleChangeState(e.target.value, "firstName");
              }}
            />
            <TextField
              className="form__input"
              fullWidth
              label="Second Name"
              variant="standard"
              value={obj.secondName}
              onChange={(e) => {
                handleChangeState(e.target.value, "secondName");
              }}
            />
            <TextField
              className="form__input"
              fullWidth
              label="Email"
              variant="standard"
              required
              value={obj.email}
              onChange={(e) => {
                handleChangeState(e.target.value, "email");
              }}
            />
            <MuiPhoneNumber
              className="form__input"
              fullWidth
              variant="standard"
              value={obj.phoneNumber}
              defaultCountry={"ua"}
              onChange={(e) => {
                handleChangeState(e, "phoneNumber");
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={obj.birthDate}
                onChange={(e) => {
                  handleChangeState(e, "birthDate");
                }}
                renderInput={(params) => (
                  <TextField
                    className="form__input"
                    required
                    variant="standard"
                    fullWidth
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              className="form__input"
              required
              fullWidth
              label="Password"
              variant="standard"
              type="password"
              autoComplete="current-password"
              value={obj.password}
              onChange={(e) => {
                handleChangeState(e.target.value, "password");
              }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
