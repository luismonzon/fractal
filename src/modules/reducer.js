import { combineReducers } from '@reduxjs/toolkit';
import authenticationReducer from './authentication/reducer';

console.log(authenticationReducer);

const rootReducer = combineReducers({ ...authenticationReducer });

export default rootReducer;