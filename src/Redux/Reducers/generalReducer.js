import Actions from "../Actions";

const initialState = {
    webStyle: null
};

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case "style":
            return {
                ...state,
                webStyle: action.payload
            };
        default:
            return state;
    }
}