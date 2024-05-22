import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});

const store = configureStore({
	reducer: rootReducer,
	devTools: true
});

export default store;
