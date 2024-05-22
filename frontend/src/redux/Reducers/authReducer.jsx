import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../Actions/typeActions";

const initialState = {
	status: "INITIAL",
	isConnected: false,
	token: null,
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				status: "SUCCESSED",
				isConnected: true,
				token: action.payload,
				error: null
			};

		case LOGIN_ERROR:
			return {
				...state,
				status: "FAILED",
				isConnected: false,
				token: null,
				error: action.payload
			};

		case LOGOUT: {
			return initialState;
		}

		default:
			return state;
	}
};

export default authReducer;
