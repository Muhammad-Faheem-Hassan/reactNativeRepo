import {
  Add_TO_CART,
  Remove_From_CART,
  SET_USER_DATA,
  USER_LIST,
} from "./constant";

const intialState = [];
const userData = [];
 

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case Add_TO_CART:
      return [...state, action.data];
    case Remove_From_CART:
      let result = state.filter((item) => {
        return item.name != action.data;
      });
      return [...result];
    
    default:
      return state;
  }
};

export const reducer2 = (state = userData, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return [...state, action.data];

    default:
      return state;
  }
};
