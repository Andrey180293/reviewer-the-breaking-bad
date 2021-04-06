//import { db } from "../../servises/firebase";
export const SET_DATA = "SET_DATA";
export const SET_LOAD = "SET_LOAD";

const setData = (payload) => ({ type: SET_DATA, payload });
export const setLoad = (payload) => ({ type: SET_LOAD, payload });

//-----------------------------------------------------------
export const getData = (link) => {
  return async (dispatch) => {
    dispatch(setLoad(false));
    const response = await fetch(`https://www.breakingbadapi.com/api/${link}`);
    const data = await response.json();

    dispatch(setData(data));
    dispatch(setLoad(true));

    return data;
  };
};

//-----------------------------------------------------------
