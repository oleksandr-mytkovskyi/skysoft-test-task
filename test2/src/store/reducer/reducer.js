import {combineReducers} from 'redux';
import  data from './reducer-app';
import  inputData from './reducer-form';

export default combineReducers({
    data,
    inputData
});


