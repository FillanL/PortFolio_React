import Actions from "../Actions";
const initialState = {
    projects: null
};

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.getProjects:
            return {
                ...state,
                projects: action.payload
            };
        case Actions.updateProject:
            return {
                ...state,
                projects: action.payload
            };
        case Actions.deleteProject:
                return {
                    ...state,
                    projects: action.payload
                };
        default:
            return state;
    }
}