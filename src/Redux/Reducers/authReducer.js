import Actions from "../Actions";

const initialState = {
    isLoggedIn:false,
    userInfo:{
        id:null,
        name:null
    }
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.loginUser:
            return {
                ...state,
                user: action.payload
            };
        case Actions.logoutUser:
            return {
                ...state,
                signinError: action.payload
            };
        case "AUTH_USER":
            return {
                ...state,
                authUser: action.payload
            };
        default:
            return state;
    }
}