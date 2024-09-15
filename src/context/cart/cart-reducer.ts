import { error } from "console";
import { Reducer } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | {
      type: "REMOVE_ITEM";
      payload: string;
    }
  | {
      type: "UPDATE_ITEM";
      payload: { id: string; quantity: number };
    }
  // | {
  //     type: "DECREMENT_QUANTITY";
  //     payload: { id: string; quantity: number };
  //   }
  | { type: "CLEAR_CART" };

export interface CartState {
  cartItems: CartItem[];
  error: string;
}

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const maxQuantity = 10;
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity + action.payload.quantity > maxQuantity) {
          alert("La quantité maximale autorisée est 10");
          return {
            ...state,
            error: "La quantité maximale autorisée est 10",
          };
        }

        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          error: "", // Réinitialiser le message d'erreur
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        error: "", // Réinitialiser le message d'erreur
      };
    }

    case "UPDATE_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        ),
        error: "", // Réinitialiser le message d'erreur
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        error: "", // Réinitialiser le message d'erreur
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
        error: "",
      };
    }

    default:
      return state;
  }
};
