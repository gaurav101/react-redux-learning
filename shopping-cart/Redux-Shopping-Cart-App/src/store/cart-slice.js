import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        isChanged: false,
    },
    reducers:{
        replaceData(state,action){
            state.totalQuantity=action.payload?.totalQuantity;
            state.itemsList=action.payload.itemsList;
            state.showCart=action.payload.showCart;
        },
        addToCart(state,action){
            state.isChanged=true;
            const newItem=action.payload;
            const existingItem=state.itemsList.find((item)=>item.id===newItem.id);
            if(existingItem){
                existingItem.quantity+= 1;
                existingItem.totalPrice+=newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalQuantity+=1;
            }
           
        },
        removeFromCart(state,action){
           state.isChanged=true; 
           const existingItem=state.itemsList.find((item)=>item.id===action.payload.id);
           console.log("item",existingItem);
           if(existingItem.quantity===1){
               state.itemsList= state.itemsList.filter((item)=>item.id!==action.payload.id);
               state.totalQuantity-=1;
           }else{
               existingItem.quantity--;
               existingItem.totalPrice-=existingItem.price;
           }
        },
        showCart(state,action){
            state.showCart=!state.showCart;
        }
        

    }
});
export const cartAction= cartSlice.actions;
export default cartSlice;