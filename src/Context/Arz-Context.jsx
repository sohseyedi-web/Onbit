import { useReducer, createContext, useContext } from "react";

export const arzAction = createContext();
export const arzActionDispatch = createContext();

const initialState = {
  cartItems: localStorage.getItem("arz")
    ? JSON.parse(localStorage.getItem("arz"))
    : [],
};

const arzHandler = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = [...state.cartItems];
      const itemIndex = item.findIndex((i) => i.id === action.payload.id);
      if (itemIndex < 1) {
        let tempProduct = { ...action.payload, quantity: 1 };
        item.push(tempProduct);
      } else {
        const updateItem = { ...item[itemIndex] };
        updateItem.quantity++;
        item[itemIndex] = updateItem;
      }
      localStorage.setItem("arz", JSON.stringify(item));
      return { ...state, cartItems: item };
    }
    case "REMOVE_ITEM": {
      const item = [...state.cartItems];
      const filterItem = item.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("arz", JSON.stringify(filterItem));
      return {
        ...state,
        cartItems: filterItem,
      };
    }
    default:
      return state;
  }
};

const ArzContext = ({ children }) => {
  const [products, dispatch] = useReducer(arzHandler, initialState);

  return (
    <arzAction.Provider value={products}>
      <arzActionDispatch.Provider value={dispatch}>
        {children}
      </arzActionDispatch.Provider>
    </arzAction.Provider>
  );
};

export default ArzContext;

export const useProduct = () => useContext(arzAction);
export const useProductDispatch = () => useContext(arzActionDispatch);
