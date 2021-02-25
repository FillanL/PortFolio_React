import { combineReducers } from 'redux';
import projectReducer from './projectReducer'
import authReducer from './authReducer'
// import userReducer from './userReducer';

export default combineReducers({
    projects: projectReducer,
    user: authReducer
})