const INITIAL_STATE = {
    cart: [],
    cartTotal: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action  // We destrcuture action. Now instead of writing action,type & action.payload, we will use type & payload.
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: payload.newCart,
                cartTotal: payload.newTotal
            };

           
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: payload.newCart,
                cartTotal: payload.newTotal
            };
        
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;