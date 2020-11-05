//React
import React from "react";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";


//Components
import api from "../axios";
import * as actionCreators from "../actions/actionCreators";
import { auth } from "../reducers/auth";

//Material

const ArticleList = () => {
    return (
        <div>
            <ArticlePreview/>
        </div>
    );
}

export default ArticleList