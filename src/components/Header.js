//React
import React from "react";
import { Link } from "react-router-dom";

//Components

//Material
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles((theme) => ({
  background:{
    
  }, 
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const LoggedInView = () => {
  //Check here if user logged in
  if (true) {
    return (
      <div>
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    );
  }
  return null;
};

const LoggedOutView = () => {
  //Check here if user not logged in
};

const Header = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="menu"></IconButton>
          <Typography variant="h6" className={classes.root}>
            Awesome Blog
          </Typography>
          <LoggedInView></LoggedInView>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
