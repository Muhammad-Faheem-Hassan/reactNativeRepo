import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import creatSagaMiddleware from 'redux-saga';
import SagaData from "./saga";
const SagaMiddleware = creatSagaMiddleware();


const store = configureStore({
    reducer:rootReducer,
    middleware:() => [SagaMiddleware]
});
SagaMiddleware.run(SagaData);
export default store;