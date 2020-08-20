export const initialState={
    basket:[],
    selected:[]
};


export const getBasketTotal=(basket)=> basket?.reduce((amount, item)=>item.price + amount, 0 );
const reducer = (state, action)=>{
   
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_CART':
            //logic to add item to cart.
            return{
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'ADD_TO_VIEW':
            console.log(state);
            return {
                ...state,
                selected:[action.item]
            };
        case 'REMOVE_FROM_CART':
            //logic to remove item from cart.
            //we cloned the basket.
            let newBasket = [...state.basket];
            //check the index of the item to be removed.
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if(index >= 0){
                //item exists in basket remove it by splicing and removing it.
                newBasket.splice(index, 1);

            }else{ 
                
            }
            //return the state as is but with an updated cart.
            return{...state, basket:newBasket};
        default:
            //leave the state as nothing has to be done.
            return {...state};
    }
};

export default reducer;