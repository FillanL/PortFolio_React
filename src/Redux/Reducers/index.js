import { combineReducers } from 'redux';
import projectReducer from './projectReducer'
import authReducer from './authReducer'
import generalReducer from './generalReducer';

export default combineReducers({
    projects: projectReducer,
    user: authReducer,
    general: generalReducer
})