//React
import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Components
import * as actionCreators from "../actions/actionCreators";

//Material
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

const Register = () => {
  const dispatch = useDispatch();
  //#TODO: Double Password should match

  const classes = useStyle();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onRegisterClick = (event) => {
    event.preventDefault();
    console.log("register submitted");
    dispatch(
      actionCreators.registerRequestAction({ username, email, password })
    );
  };

  return (
    <form onSubmit={onRegisterClick}>
      <div className={classes.container}>
        <div className={classes.inputGroup}>
          <TextField
            label="Username"
            type="text"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          ></TextField>
          <TextField
            label="Email"
            type="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
            required
          ></TextField>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            value={password2}
            autoComplete="current-password"
            onChange={(event) => setPassword2(event.target.value)}
            required
          />
        </div>
        <div>
          <Button
            className={classes.buttonGroup}
            disabled={email === "" || password === ""}
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Register;
