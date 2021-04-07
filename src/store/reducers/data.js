import { SET_DATA, SET_LOAD, SET_CURRENT_PAGE } from "../action-creators/data";

const initialization = {
  data: null,
  isLoad: true,
  totalCount: 62,
  currentPage: 1,
  perPage: 10,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: +action.payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
