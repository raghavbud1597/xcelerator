import { combineReducers } from 'redux';
import authReducer from './authentication';
import userReducer from './user';

const allReducers = combineReducers({
    isLogged: authReducer,
    user: userReducer
});

export default allReducers;