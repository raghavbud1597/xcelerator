import { combineReducers } from 'redux';
import authReducer from './authentication'

const allReducers = combineReducers({
    isLogged: authReducer,
});

export default allReducers;