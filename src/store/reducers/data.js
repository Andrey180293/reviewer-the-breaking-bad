import {
  SET_DATA,
  SET_LOAD,
  SET_IMG,
  SET_QUOTE,
} from "../action-creators/data";

const initialization = {
  data: null,
  isLoad: true,
  image: null,
  quote: null,
};

const DataReducer = (state = initialization, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOAD:
      return {
        ...state,
        isLoad: action.payload,
      };
    case SET_IMG:
      return {
        ...state,
        image: action.payload,
      };
    case SET_QUOTE:
      return {
        ...state,
        quote: action.payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
