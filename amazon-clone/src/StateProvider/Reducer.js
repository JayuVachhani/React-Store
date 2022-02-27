// let cart;
export const initialState = {
  cart: [],
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => 
          item.id !== action.id
        )
      }
    default:
      return state
  }
}
export default reducer
