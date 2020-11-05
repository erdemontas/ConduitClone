import {
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_ERROR,
} from "../actions/actionTypes";

const initialState = {
  articles: []
};

const articleReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case ARTICLE_REQUEST: {
      return {
        ...state,
      };
    }
    case ARTICLE_SUCCESS: {
      return {
        ...state,
        articles: action.payload.articles,
      };
    }
    case ARTICLE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default articleReducer;
