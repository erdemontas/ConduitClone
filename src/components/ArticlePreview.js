//React
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import api from "../axios";
import * as actionCreators from "../actions/actionCreators";

//Material
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  preview: {
    borderTop: "1px solid rgba(0, 0, 0, .1)",
    padding: "1.5rem 0",
    h1: {
      fontWeight: "600!important",
      fontSize: "1.5rem!important",
      marginBottom: "3px",
    },
    p: {
      fontWeight: 300,
      fontSize: "24px",
      color: "#999",
      marginBottom: "15px",
      fontSize: "1rem",
      lineHeight: "1.3rem",
    },
  },
  meta: {
    display: "block",
    position: "relative",
    fontWeight: 300,
  },
}));

const ArticlePreview = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  dispatch(actionCreators.articleRequestAction())
    return (
    <div className={classes.preview}>
      <div className={classes.meta}>Article Img</div>
      <div>
        <h1>article.title</h1>
        <p>article.description</p>
        <span>Read More..</span>

        <ul>
          <li>tag will come here</li>
          <li>tag will come here</li>
        </ul>
      </div>
    </div>
  );
};

export default ArticlePreview;
