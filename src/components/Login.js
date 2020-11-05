//React
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import * as actionCreators from "../actions/actionCreators";


//Material
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 400,
    margin: `${theme.spacing(0)} auto`,
    alignItems: "center",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  buttonGroup: {
    marginTop: theme.spacing(4),
    flexGrow: 1,
  },
}));

const Login = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = (event) => {
    event.preventDefault();
    dispatch(actionCreators.loginRequestAction({email, password}))
  };

  return (
    <form onSubmit={onLoginClick}>
      <div className={classes.container}>
        <div className={classes.inputGroup}>
          <TextField
            label="E-mail"
            type="email"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <Button
            className={classes.buttonGroup}
            disabled={email === "" || password === ""}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
