import React, { useEffect, useState } from 'react'
import Style from './CartCard.module.css'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import {CheckoutState,setCount,removeCheckoutValue} from '../redux/CheckoutSlice'
import { useSelector, useDispatch } from "react-redux";
function CartCard({ticketName,duration,slot,amount,date,id}) {
    const [quantity,setQuantity] = useState(1)
    const checkoutValue = useSelector(CheckoutState);
    const dispatch = useDispatch();

    const add =()=>{
        setQuantity(quantity+1)
        console.log(checkoutValue)
    }

    const minus= ()=>{
        if(quantity === 0){
            setQuantity(0)
        }
        else{
            setQuantity(quantity-1)
        }
    }

    const remove = () =>{
       dispatch(removeCheckoutValue({
        id:id,
       }))
    }

    useEffect(()=>{
      dispatch(setCount({
        id:id,
        count:quantity
      }))
    },[quantity])

  return (
    <div className={Style.cardContainer}>
        
        <div className={Style.cont} style={{display:"flex",gap:"60px"}}>

        <img className={Style.img} style={{borderRadius:"10px"}} alt='' src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
        
        <div className={Style.content}>
            <h4>{ticketName}</h4>
            <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",gap:"20px"}}>
                <div style={{display:"flex",gap:"40px"}}>
                    <p style={{marginTop:"10px"}}>{duration}</p>
                    <div className={Style.slot}>{slot}</div>
                </div>
                <div style={{display:"flex",gap:"20px"}}>
                    <h5 style={{color:'#F0D318'}}>{amount} RS</h5>
                    <h5 style={{color:'#F0D318'}}>{date}</h5>
                </div>
            </div>
        </div>

        </div>

        <div className={Style.quantityContainer}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <AiOutlinePlusCircle color='#F0D318' className={Style.icon} onClick={add}/>
          <input type='number' className={Style.cartInput} value={quantity} onChange={(e)=>{setQuantity(parseInt(e.target.value))}}/>
          <AiOutlineMinusCircle color='#F0D318' className={Style.icon} onClick={minus}/>
        </div>

        <BiTrash  color='#F0D318' className={Style.icon} onClick={remove}/>
        </div>


    </div>
  )
}

export default CartCard