import {createStore, combineReducers} from "redux"
import  ActividadesReducer from "../store/reducers/Actividades.reducer"

const RootReducer = combineReducers({
    Actividades:ActividadesReducer
})

export default createStore(RootReducer)