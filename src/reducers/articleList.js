import {
    ARTICLELIST_REQUEST,
    ARTICLELIST_SUCCESS,
    ARTICLELIST_ERROR,
  } from "../actions/actionTypes";
  
  const initialState = {
    articles: []
  };
  
  const articleListReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
  
    switch (action.type) {
      case ARTICLELIST_REQUEST: {
        return {
          ...state,
        };
      }
      case ARTICLELIST_SUCCESS: {
        return {
          ...state,
          
        };
      }
      case ARTICLELIST_ERROR: {
        return {
          ...state,
          error: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default articleListReducer;
  