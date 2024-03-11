import { createStore, combineReducers } from 'redux';
import {powerReducer, bankReducer, infoReducer, volumeReducer } from '../reducers/drumReducer';

const rootReducer = combineReducers({
    powerState: powerReducer,
    bankState: bankReducer,
    infoState: infoReducer,
    volumeState: volumeReducer
});

export const store = createStore(rootReducer);

export default store;