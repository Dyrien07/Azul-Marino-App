
import { ACTIVIDADES } from "../../data/Actividades";
import { SELECTED_ACTIVIDAD } from "../actions/actividad.action";

const initialState = {
    actividades : ACTIVIDADES,
    slected: null
};



const ActividadesReducer = (state = initialState, action) => {
  switch(action.type){
    case SELECTED_ACTIVIDAD:
        const indexActividad = state.actividades.findIndex(
            act =>act.ID === action.ID
            )
            if(indexActividad === -1 ){
                return state
            
             }else{
                return {...state, selected: state.actividades[indexActividad]}
             }
            default : return state
 }

 
};



export default  ActividadesReducer