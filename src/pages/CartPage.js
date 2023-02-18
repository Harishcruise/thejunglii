import React, { useEffect, useState } from 'react'
import CartCard from '../components/CartCard'
import Style from './CartPage.module.css'
import CustomModal from '../components/CustomModal'
import {CheckoutState} from '../redux/CheckoutSlice'
import { useSelector, useDispatch } from "react-redux";
function CartPage() {
  const checkoutValue = useSelector(CheckoutState);
    const [totalAmount,setTotalAmount] = useState(0)
    const [modalShow, setModalShow] = useState(false);

  const modal=()=>{

    if(checkoutValue.length === 0){
       alert("Please add Item to cart")
    }
    else{
      setModalShow(true)
    }
  }  
  useEffect(()=>{
    var temp = 0 ;
    checkoutValue.map((value)=>{
        temp = temp + (value.amount * value.count)
    })
    setTotalAmount(temp)
    console.log(totalAmount)
  },[checkoutValue])
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

    <h5 style={{color:'#898989'}}>{totalAmount}</h5>

    </div>

    <div style={{display:"flex",justifyContent:"flex-end"}}>
        <button className={Style.checkOutBtn} onClick={modal}>Checkout</button>
    </div>

    <CustomModal show={modalShow}
        onHide={()=>setModalShow(false)} />
    </div>
  )
}

export default CartPage