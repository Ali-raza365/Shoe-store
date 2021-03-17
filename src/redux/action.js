import {
  GET_Id,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  Change_Quantity,
  GET_TOTAL,
} from "./actionTypes";

export const selectedProduct = (id) => {
  return {
    type: GET_Id,
    payload: id,
  };
};

export const AddToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};
export const Remove = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const ChangeQuantity = (id, qty) => {
  return {
    type: Change_Quantity,
    payload: { id, qty },
  };
};
export const GetTotal = () => {
  return {
    type: GET_TOTAL,
    payload: null,
  };
};
