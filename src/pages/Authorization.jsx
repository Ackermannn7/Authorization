import React, { useState } from "react";
import { Paper, Tabs, Tab, Box } from "@mui/material";
import { LogInForm } from "../components/LogInForm";
import { SignUpForm } from "../components/SignUpForm";

export const Authorization = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width: 400,
    height: "100%",
    margin: "20px auto",
    textAlign: "center",
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign Up" />

        <Tab label="Log In" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUpForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LogInForm />
      </TabPanel>
    </Paper>
  );
};
