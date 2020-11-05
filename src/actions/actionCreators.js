import * as types from "./actionTypes";

//will take email and password
export const loginRequestAction = (credentials) => {
  return {
    type: types.AUTH_REQUEST,
    payload: credentials,
  };
};

//Will take user object(id and token)
export const loginSuccessAction = (userData) => {
  console.log(userData);
  return {
    type: types.AUTH_SUCCESS,
    payload: userData,
  };
};

export const loginErrorAction = (error) => {
  return {
    type: types.AUTH_FAILURE,
    payload: error,
  };
};



export const registerRequestAction = (credentials) => {
  return {
    type: types.REGISTER_REQUEST,
    payload: credentials,
  };
};

export const registerSuccessAction = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: payload,
  };
};

export const registerErrorAction = (error) => {
  return {
    type: types.REGISTER_ERROR,
    payload: error,
  };
};



export const articleRequestAction = () => {
  return {
    type: types.ARTICLE_REQUEST,
  };
};

export const articleSuccessAction = (payload) => {
  return {
    type: types.ARTICLE_SUCCESS,
    payload: payload
  };
};

export const articleErrorAction = (error) => {
  return {
    type: types.ARTICLE_ERROR,
    payload: error
  };
};



export const articleListRequestAction = (payload) => {
  return {
    type: types.ARTICLELIST_REQUEST,
    payload: payload
  };
};

export const articleListSuccessAction = (payload) => {
  return {
    type: types.ARTICLELIST_SUCCESS,
    payload: payload
  };
};

export const articleListErrorAction = (error) => {
  return {
    type: types.ARTICLELIST_ERROR,
    payload: error
  };
};