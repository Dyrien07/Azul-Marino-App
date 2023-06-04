import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"

import  ActividadesReducer from "../store/reducers/Actividades.reducer"

const RootReducer = combineReducers({
    Actividades:ActividadesReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))