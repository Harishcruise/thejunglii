import React, {useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import {CheckoutState, setCheckoutValue} from '../redux/CheckoutSlice'
import { useSelector, useDispatch } from "react-redux";
import Style from './VipBooking.module.css'
import moment from 'moment/moment';

function VipBooking() {
  const checkoutValue = useSelector(CheckoutState);
  const dispatch = useDispatch();
    const navigate = useNavigate()
    const [dateValue, setDate] = useState(new Date());
    const [active, setActive] = useState("")
    const [value, setValue] = useState({
      id:"4",
      ticketName:"JUNGLII'S VIP VISIT",
      timeSlot:"",
      hours:"",
      amount:1000,
      date:moment(dateValue).format('DD-MM-YYYY'),
      count:1
})

    const timeSlot =(slot,duration)=>{
      setValue({...value,timeSlot:slot,hours:duration})
      setActive(slot)
      console.log(value)
    }  
  
    const addToCart =() =>{
      dispatch(setCheckoutValue(value));
      console.log(checkoutValue)
    }
  
    const onChange =(e) =>{
        setDate(e)
        console.log(dateValue)
    }

    useEffect(()=>{
      setValue({...value,date:moment(dateValue).format('DD-MM-YYYY')})
    },[dateValue])
    
  return (
    <div className={Style.container}>
    
    <div className={Style.calenderContainer}>

    <h4 className={Style.backBtn} onClick={()=>{navigate("/Home")}}> ← View all Services </h4>
     <Calendar onChange={(e)=>onChange(e)} value={dateValue} />
     
     <div className={Style.timeContainer}>
     <div className={Style.cont1}>
       <h4>Morning</h4>
       <div className={Style.btnCont}>
        <button onClick={()=>(timeSlot("11.00 AM","30Min"))} className={active === '11.00 AM' ? Style.slotBtnActive : Style.slotBtn}>11.00 A.M</button>
        <button onClick={()=>(timeSlot("11.30 AM","30Min"))} className={active === '11.30 AM' ? Style.slotBtnActive : Style.slotBtn}>11.30 A.M</button>
        <button onClick={()=>(timeSlot("12.00 AM","30Min"))} className={active === '12.00 AM' ? Style.slotBtnActive : Style.slotBtn}>12.00 A.M</button>
        <button onClick={()=>(timeSlot("12.30 AM","30Min"))} className={active === '12.30 AM' ? Style.slotBtnActive : Style.slotBtn}>12.30 A.M</button>
       </div>
     </div>


     <div className={Style.cont2}>
       <h4>Afternoon</h4>
       <div className={Style.btnCont}>
        <button onClick={()=>(timeSlot("2.00 AM","30Min"))} className={active === '2.00 AM' ? Style.slotBtnActive : Style.slotBtn}>2.00 A.M</button>
        <button onClick={()=>(timeSlot("2.30 AM","30Min"))} className={active === '2.30 AM' ? Style.slotBtnActive : Style.slotBtn}>2.30 A.M</button>
        <button onClick={()=>(timeSlot("3.00 AM","30Min"))} className={active === '3.00 AM' ? Style.slotBtnActive : Style.slotBtn}>3.00 A.M</button>
        <button onClick={()=>(timeSlot("3.30 AM","30Min"))} className={active === '3.30 AM' ? Style.slotBtnActive : Style.slotBtn}>3.30 A.M</button>
        <button onClick={()=>(timeSlot("4.00 AM","30Min"))} className={active === '4.00 AM' ? Style.slotBtnActive : Style.slotBtn}>4.00 A.M</button>
        <button onClick={()=>(timeSlot("4.30 AM","30Min"))} className={active === '4.30 AM' ? Style.slotBtnActive : Style.slotBtn}>4.30 A.M</button>
        <button onClick={()=>(timeSlot("5.00 AM","30Min"))} className={active === '5.00 AM' ? Style.slotBtnActive : Style.slotBtn}>5.00 A.M</button>
       </div>
     </div>


     <div className={Style.cont3}>
       <h4>Evening</h4>
       <div className={Style.btnCont}>
        <button onClick={()=>(timeSlot("6.00 AM","30Min"))} className={active === '6.00 AM' ? Style.slotBtnActive : Style.slotBtn}>6.00 A.M</button>
        <button onClick={()=>(timeSlot("6.30 AM","30Min"))} className={active === '6.30 AM' ? Style.slotBtnActive : Style.slotBtn}>6.30 A.M</button>
        {/* <button onClick={()=>(timeSlot("11.00 AM","30Min"))} className={Style.slotBtn}>11.00 A.M</button>
        <button onClick={()=>(timeSlot("11.00 AM","30Min"))} className={Style.slotBtn}>11.00 A.M</button> */}
       </div>
     </div>



     </div>

     <button className={Style.slotBtn} onClick={addToCart} >Add To Cart</button>
    </div>
     <div>

     </div>


     <div className={Style.petContainer}>
     
     <div>
     <h3>JUNGLII'S VIP VISIT</h3>
     <h4>30 min|₹399(Pay later)</h4>
     </div>

     <img alt='' width={550} height={350} style={{borderRadius:"10px",borderColor:"#FFFFFF"}} src='https://img1.wsimg.com/isteam/ip/3b365560-5245-47cc-b9ac-77e98d410987/028f9a69a589f5674b06dfd4f2df51c7.jpg/:/rs=h:%7B640%7D'/>

     <h5 style={{color:"#898989"}}>::::::::::::: Exotic Pet Keeping– An Advanced Introduction :::::::::::::::</h5>

     <div style={{color:"#898989"}}>
        <h5>SMALL EXOTIC PETS</h5>
        <h5>Hedgehogs, Abysinian Guinea pigs, Fancy Rabbits</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>EXOTIC FREE FLIGHT AVIARY</h5>
        <h5>Exotic Free Flight Aviary Sun Conures, Green Cheek Conure varities, Cockatiel Mutations, Show Budgies, African Lovebirds(6)</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>EXOTIC PET COMPANIONS</h5>
        <h5>Blue Throated Conure, NanSun Conure, Senegal Parrot, Sun Conure, Rainbow Lorikeet, Crested and Helicopter Budgies. Russian Dwarf Hamster, Syrian Long Hair Hamster, Guinea Pigs.</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>CATS CLOUDER</h5>
        <h5>Persian Cats: Calico, Golden Punch face, Choco Black Doll Face</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>FARM PETS - BASIC & FEEDING INTRO</h5>
        <h5>Dwarf Goats, Fancy Chickens, Fantail Pigeons & Angora Rabbits & Sulcata Tortoise.</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>REPTILE, (1) INTRO & CONNECT, AMFIBIAN – INTRO</h5>
        <h5>Red Iguana, Green Iguana, Red-Ear Slider Turtle, Bearded Dragon, Royal Ball python, Snapping Turtle
South American Horned Frogs i.e Pacman Frog Morphs</h5>
     </div>
     <div style={{color:"#898989"}}>
        <h5>Exotic Large bird (1) Intro & Connect</h5>
        <h5>BlueGold Macaw, Green Winged Macaw, Amazon Parrot, Yellow Collar Macaw</h5>
     </div>


     </div>


    </div>
  )
}

export default VipBooking