// reducers.js
import { SAVE_FORM_DATA } from "./actions";

const initialState = {
  formSubmitted: false,
  formData: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_DATA:
      return {
        ...state,
        formSubmitted: true,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
