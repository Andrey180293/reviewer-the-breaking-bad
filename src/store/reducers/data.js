import { SET_DATA, SET_LOAD } from "../action-creators/data";

const initialization = {
  data: null,
  isLoad: true,
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

    default:
      return state;
  }
};

export default DataReducer;
