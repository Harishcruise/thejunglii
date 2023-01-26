import React from 'react'
import Style from './OurTeamPage.module.css'
import quote from '../assets/quote.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function ourTeamPage() {
  return (
    <div style={{backgroundColor:"#000000",display:"flex",flexDirection:"column"}}>
      <div className={Style.section1}>

        <div className={Style.textContainer}>
          <img width={50} height={40} src={quote} alt=''/>
          <h1 style={{color:'#F0D318'}}>Compassion is a muscle that gets stronger with use.</h1>
          
          <div style={{display:"flex",gap:"30px"}}> <h5> ─── </h5>
          <h5 style={{color:'#FFFFFF'}}> Mahatma Gandhi. </h5></div>
          
        </div>
        <div className={Style.imgContainer}><img height={600} width={600} src="https://img1.wsimg.com/isteam/ip/3b365560-5245-47cc-b9ac-77e98d410987/2018-10-26.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1160" alt=""/></div>
        
      </div>

      <div className={Style.ourPetContainer}>
    <div className={Style.ourPetText}>
      <h1 style={{color:'white'}}>Our Pet Pals</h1>
    </div>

    <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"  alt=''/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"  alt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images4.alphacoders.com/936/936378.jpg"  alt='' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>


    </div>
  )
}

export default ourTeamPage