
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const initialState = {
  items: [],
  total: 0,
};

const sumaTotal = (prods) => {
 prods.map(item=> item.cantidad * item.Precio).reduce((a,b)=> a + b, 0);
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const newCart = [...state.items].filter((item) => item.ID !== action.id);
      return { ...state, items: newCart, total: sumaTotal(newCart) };

    case ADD_ITEM:
 
      const findItemCart = state.items.findIndex(
        (item) => item.ID === action.item.ID

      );
      if (findItemCart === -1) {
        const item = { ...action.item, cantidad: 1 };
        const newCart = [ ...state.items, item ];
        return { ...state, items: newCart, total: sumaTotal(newCart) };
      }
      const items = [...state.items].map((item) => {
        if (item.ID === action.item.ID) item.cantidad++;
        return item;
      });
      return { ...state, items, total: sumaTotal(items) };

    case CONFIRM_CART:
      return state;

    default:
      return state;
  }
};

export default cartReducer;
