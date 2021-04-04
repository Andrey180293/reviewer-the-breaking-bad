import { SET_DATA } from "../action-creators/data";

const initialization = {
  data: null,
};

const DataReducer = (state = initialization, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
