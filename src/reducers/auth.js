import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../actions/actionTypes";

const initialState = {
  userData : null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        userData: action.payload
      };
    }
    case AUTH_SUCCESS: {
      console.log("aaaa", action.payload)
      return {
        ...state,
        userData : action.payload.user
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case REGISTER_REQUEST: {
      return {
        
      }
    }
    case REGISTER_SUCCESS: {
      return {
        
      }
    }
    case REGISTER_ERROR: {
      return {
        
      }
    }
    default: {
      return state;
    }
  }
};

export default auth;
