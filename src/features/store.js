// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "D:/Task/FormValidation/form/src/features/reducers";

const store = configureStore({
    reducer:rootReducer,
});

export default store;
