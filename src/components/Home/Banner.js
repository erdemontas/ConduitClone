//React
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components

//Material
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  banner: {
    color: "white",
    background: "rgb(92, 184, 92)",
    padding: "2rem",
    marginBottom: "2rem",
  },
  h1: {
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
  },
  p: {
    fontSize: "1rem",
  },
}));

const Banner = () => {
  const userData = useSelector((state) => state.auth.userData);
  const renderUsername = (userData) => {
    if (userData && userData.username) {
      return <h1>`Hi ${userData.username}`</h1>;
    } else {
      return `Try to login`;
    }
  };
  const classes = useStyle();
  return (
    <div className={classes.banner}>
      <div className={classes.h1}>
        {renderUsername()}
        <p className={classes.p}>This is banner</p>
      </div>
    </div>
  );
};

export default Banner;
