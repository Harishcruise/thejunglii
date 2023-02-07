import React from 'react'
import CartCard from '../components/CartCard'
import Style from './CartPage.module.css'
import {CheckoutState} from '../redux/CheckoutSlice'
import { useSelector, useDispatch } from "react-redux";
function CartPage() {
  const checkoutValue = useSelector(CheckoutState);
    const dispatch = useDispatch();
  return (
    <div className={Style.cartContainer}>
         <div className={Style.cartText}>
      <h1 style={{color:'white'}}>Checkout</h1>
    </div>

    <h3 style={{color:'#F0D318',marginTop:"50px"}}>Order Summary</h3>
    <div style={{height:"1px",width:"70px",border:"1px solid #F0D318"}}></div>

    {/* <CartCard /> */}
    {checkoutValue.map((value)=>(
      <CartCard id={value.id} ticketName={value.ticketName} duration={value.hours} slot={value.timeSlot} date={value.date} amount={value.amount} />
    ))}


    <div className={Style.amountContainer}>

    <h3 style={{color:'#898989'}}>Total Amount</h3>

    <h5 style={{color:'#898989'}}>{checkoutValue[0].count}</h5>

    </div>

    <div style={{display:"flex",justifyContent:"flex-end"}}>
        <button className={Style.checkOutBtn}>Checkout</button>
    </div>
    </div>
  )
}

export default CartPage