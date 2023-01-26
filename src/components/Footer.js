import React from 'react'
import insta from '../assets/insta.png'
import fb from '../assets/fb.png'
import Style from './Footer.module.css'
function Footer() {
  return (
    <>
    <div className={Style.footer}>
    <div className={Style.socialBtnCont}>
        <img width={40} height={40} src={insta} alt=''/>
        <img width={40} height={40}  src={fb} alt='' />
      </div>

      <h6 style={{color:"#898989"}}>Copyright © 2022 Junglii's Petting Zoo & Exotic Pet Shop - All Rights Reserved.</h6>

      <div style={{display:"flex",flexDirection:"row",gap:"40px",color:"#898989"}}><h5>Privacy Policy</h5><h5> Refund Policy</h5></div>
      <div style={{width:"10%",height:"2px",borderBottom:"solid",borderBottomWidth:"1px",borderBottomColor:"#898989"}}></div>
      <h6 style={{color:"#898989"}}>Powered by TamedPets</h6>
    </div>
    </>
  )
}

export default Footer