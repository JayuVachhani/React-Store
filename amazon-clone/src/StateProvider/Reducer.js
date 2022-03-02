// let cart;
export const initialState = {
  cart: [],
}

const reducer = (state, action) => {
  
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case 'REMOVE_ITEM_FROM_CART':
      const cartItemIndex = state.cart.findIndex((cartItem)=>cartItem.id === action.id);
      let newCart = [...state.cart]
      if (cartItemIndex >=0){
          newCart.splice(cartItemIndex,1)
      }
      else{
          console.warn(`There is no matching item with id ${action.id} in your cart !!!`)
      }

      return {
        ...state,
        cart:newCart 
        // state.cart.filter(item => 
        //   item.id !== action.id
        // )
      }
    default:
      return state
  }
}
export default reducer
