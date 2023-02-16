import { createSlice } from "@reduxjs/toolkit";

export const CheckoutSlice = createSlice({
    name:"Checkout",
    initialState:{
        value:[]
    },
    reducers:{
        setCheckoutValue: (state,action) => {

            const index = state.value.findIndex(val => val.id === action.payload.id);
            
            console.log(index)

            if(index !== -1){
                const newArray = [...state.value];
                console.log(action.payload)
                newArray[index] = action.payload;
                state.value = newArray;
            }
            else{
                state.value = [...state.value,action.payload]
            }

            
            
        },
        setCount: (state,action) =>{
            const index = state.value.findIndex(val => val.id === action.payload.id);

            const newArray = [...state.value];

            newArray[index].count = action.payload.count;

            state.value = newArray
        },

        removeCheckoutValue: (state,action) =>{
            const newArray = [...state.value];
            console.log(action.payload.id)
            newArray.filter(function(val){
                return val.id !== action.payload.id
            })
            state.value = newArray
            console.log(state.value)
        }
    }
})

export const { setCheckoutValue,setCount,removeCheckoutValue } = CheckoutSlice.actions;

export const CheckoutState = (state) => state.Checkout.value;

export default CheckoutSlice.reducer;