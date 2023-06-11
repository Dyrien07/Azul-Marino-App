import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"




import  ActividadesReducer from "../store/reducers/Actividades.reducer"
import cartReducer from "./reducers/cart.reducer"
import LoginReducer from "./reducers/Login.reducer"

const RootReducer = combineReducers({
    Actividades:ActividadesReducer,
    Cart : cartReducer,
    login: LoginReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))