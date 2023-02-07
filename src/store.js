import { configureStore } from '@reduxjs/toolkit'
import CheckoutReducer from './redux/CheckoutSlice'
export default configureStore({
reducer: {
Checkout: CheckoutReducer,
},
})