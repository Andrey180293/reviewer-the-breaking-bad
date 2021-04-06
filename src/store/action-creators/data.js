//import { db } from "../../servises/firebase";
export const SET_DATA = "SET_DATA";
export const SET_LOAD = "SET_LOAD";
export const SET_IMG = "SET_IMG";
export const SET_QUOTE = "SET_QUOTE";

const setData = (payload) => ({ type: SET_DATA, payload });
export const setLoad = (payload) => ({ type: SET_LOAD, payload });

const setImg = (payload) => ({ type: SET_IMG, payload });
const setQuote = (payload) => ({ type: SET_QUOTE, payload });

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
export const getImg = () => {
  return async (dispatch) => {
    dispatch(setLoad(false));
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/1/`
    );
    const data = await response.json();
    dispatch(setImg(data[0].img));
    dispatch(setLoad(true));

    return data;
  };
};

//-----------------------------------------------------------
export const getQuote = () => {
  return async (dispatch) => {
    dispatch(setLoad(false));
    const response = await fetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const data = await response.json();
    dispatch(setQuote(data[0].quote));
    dispatch(setLoad(true));

    return data;
  };
};
