import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Style from './FarmBooking.module.css'
import { useNavigate } from 'react-router-dom';
function FarmBooking() {
    const navigate = useNavigate()
    const [value, onChange] = useState(new Date());
  return (
    <div className={Style.container}>
    
    <div className={Style.calenderContainer}>

    <h4 className={Style.backBtn} onClick={()=>{navigate("/Home")}}> ← View all Services </h4>
     <Calendar onChange={onChange} value={value} />
     
     <div className={Style.timeContainer}>
     
     <div className={Style.cont1}>
       <h4>Morning</h4>
       <div className={Style.btnCont}>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
       </div>
     </div>


     <div className={Style.cont2}>
       <h4>Afternoon</h4>
       <div className={Style.btnCont}>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
       </div>
     </div>


     <div className={Style.cont3}>
       <h4>Evening</h4>
       <div className={Style.btnCont}>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
        <button className={Style.slotBtn}>11.00 A.M</button>
       </div>
     </div>

     </div>
    </div>
     <div>

     </div>


     <div className={Style.petContainer}>
     
     <div>
     <h3>JUNGLII'S FARM Friends</h3>
     <h4>30 min|₹399(Pay later)</h4>
     </div>

     <img alt='' width={550} height={350} style={{borderRadius:"10px",borderColor:"#FFFFFF"}} src='https://img1.wsimg.com/isteam/ip/3b365560-5245-47cc-b9ac-77e98d410987/download%20(1)-0003.jfif/:/rs=h:%7B640%7D'/>

     <h5 style={{color:"#898989"}}>:::::::::::::::::::: PET KEEPING INTRO ::::::::::::::::::::</h5>

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

     </div>


    </div>
  )
}

export default FarmBooking