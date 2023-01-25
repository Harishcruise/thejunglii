import React from 'react'
import Style from './LandingPage.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import insta from '../assets/insta.png'
import fb from '../assets/fb.png'
import wapp from '../assets/wapp.png'

function LandingPage() {
  return (
    <>
    <Navbar expand="lg" sticky="top" style={{backgroundColor:"rgb(0,0,0,0.5)"}}>
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:'center',height:'60px'}}>
          <Nav            
            style={{ maxHeight: '100px',display:'flex',gap:'20px'}}
            navbarScroll
          >
            <Nav.Link href="#action1"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>Home</div></Nav.Link>
            <Nav.Link href="#action2"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>Our Team</div></Nav.Link>
            <Nav.Link href="#"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>FAQ</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <div className={Style.fixedBackground}>

    </div>

    <marquee direction="right" bgcolor="#000000" style={{color:'#F0D318'}} behavior='alternate' className={Style.marqueeTag}>
       <h1>Welcome To India's First Exotic Petting Zone Consulting. Things To Know Before You Buy A Pet.</h1> 
    </marquee>

    <div className={Style.bookingContainer}>
    <div className={Style.bookingText}>
      <h1 style={{color:'white'}}>Book Your Slots Now</h1>
    </div>

    <div>
      <div className={Style.tabSwitchContainer}>
        <h4 className={Style.tabSwitchText}>
          All services
        </h4>
        <h4 className={Style.tabSwitchText}>
        Basic
        </h4>
        <h4 className={Style.tabSwitchText}>
        Farm Friends
        </h4>
        <h4 className={Style.tabSwitchText}>
        Reptile Crush
        </h4>
      </div>

      <div className={Style.cardContainer}>

      <Card style={{ width: '24rem',height:'26rem' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
      <Card.Title>JUNGLII’S PETTING ZONE</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem',height:'26rem' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S FARM FRIENDS</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem',height:'26rem' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S REPTILE CRUSH</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem',height:'26rem' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S VIP ZONE</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem',height:'26rem' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S VVIP ZONE</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
      </div>
    </div>
    
    </div>


    <div className={Style.aboutUsContainer}>
    <div className={Style.aboutUsText}>
      <h1 style={{color:'white'}}>About Us</h1>
    </div>
    <div className={Style.aboutUsSubContainer}>
      <div className={Style.aboutUscont1}>
      <h2 style={{color:'#F0D318'}}>Who We Are</h2>
        <p>We are animal enthusiasts with an Indoor petting zone concept along with exotic pets and consulting. we have been interested in and have handled exotic pets for over a decade. We regularly deal with exotic pets for sale in Chennai and transport them within India on demand.</p>
        <p>We have personally volunteered with a number of animal welfare and project organisations in Chennai. In addition, we've worked as a consultant for notable teams in the private, non-profit, and Government sectors across India.</p>
        <p>Its always good to be different and innovative. And It’s a pleasure to do it for the voiceless.</p>    
      </div>
      <div className={Style.aboutUscont2}>
      <h2 style={{color:'#F0D318'}}>Our Mission</h2>
      <p>Our mission is to raise awareness about the significance of compassion for pets and other animals in everyday life. That is why, in addition to the pet store, we wanted to include an educational component so that children and families can not only pet our pets but also learn about the basics of pet/animal care before purchasing one for themselves. </p>
      </div>
      <div className={Style.aboutUscont3}>
      <h2 style={{color:'#F0D318'}}>Compassion</h2>
        <p>While we understand the desire of children to meet animals, setting something up as a “petting zone” is not only for kids to enjoy company of the animals and vice versa and also to emphasize teaching children about compassion toward animals.</p>
        <p>It’s pretty easy to overlook them when we get caught up in our fast-paced, hectic world. However, they do not usually live as long as we do, and our time together is precious. We simply want to make an impression. Empathy for animals not only reduces stress, but it also opens ones heart wide open., which will avoid impulsive purchase of pet animals and their trauma.</p>
      </div>
    </div>
    </div>


    <div className={Style.jungliiContainer}>
    <div className={Style.jungliiText}>
      <h1 style={{color:'white'}}>JUNGLII</h1>
    </div>
    

    <div className={Style.contentContainer}>

    <div className={Style.contentImageContainer}>
      <img src='https://img1.wsimg.com/isteam/ip/3b365560-5245-47cc-b9ac-77e98d410987/157482133-56a0012e3df78cafda9f8faf.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true' alt=''/>
    </div>

    <div className={Style.contentTextContainer}>
      <p>The Junglii indoor petting zone is a platform where everyone can experience different kind of exotic pets and learn new things about pet before they buy one for themselves. We facilitate experiences that include observation, touch, feel, and building, among other aspects. Coexistence and responsible citizenship are what we seek. We want to be a bridge between humans and animals, connecting them together via safe, enjoyable interactions.</p>
      <p>Meet our pets from all across the world up close and personal. Surround yourself with about 50 incredible creatures (from over 30 different species), including cute furies, reptiles, birds, insects, amphibians, exotics, and more!!</p>   
      <p>A digital detox, or just limiting screen time and moving outside, is critical for a generation on the verge of becoming obese. Stress, anxiety, despair, and other mental health issues, which are on the rise, have traumatized us.</p>
      <p>Animals may help us heal and have a tremendous therapeutic effect on our mental, emotional, and spiritual well-being. We work with our animals to help children confront and conquer their concerns, allowing them to reach their full potential as citizens, creators, and protectors.</p>
    </div>

    </div>
    </div>



    <div className={Style.socialContainer}>
    <div className={Style.socialText}>
      <h1 style={{color:'white'}}>JUNGLII is a ‘Exotic– Pet Shop’ with consulting services.</h1>
    </div>

    <div className={Style.socialBtnCont}>
        <img width={40} height={40} src={insta} alt=''/>
        <img width={40} height={40}  src={fb} alt='' />
      </div>
    </div>

    <div className={Style.contactUsContainer}>
    <div className={Style.contactUsText}>
      <h1 style={{color:'white'}}>Contact Us</h1>
    </div>

    <div className={Style.contactUsContentContainer}>
        <h3>7697999799</h3>

        <button className={Style.contactUsBtn}><img width={30} height={30} style={{marginRight:'20px'}} src={wapp} alt=""/>Message us on WhatsApp</button>
       
        <h3>JUNGLII - PETTING ZONE (Concept Petshop)</h3>


        <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:"#898989"}}>
        <h5>JUNGLII - PETTING ZOO (Concept Petshop), East Coast Road, Injambakkam, Chennai,</h5>
        <h5> Tamil Nadu, India</h5>
        </div>
         
        <h5 style={{color:"#F0D318"}}>jungliiofficial@gmail.com</h5>

        <h3>Client Visit Timing.</h3>

        <div style={{display:"flex",flexDirection:"row",gap:"10px"}}><h5 style={{color:"#898989"}}>Open today </h5><h5 style={{color:"#F0D318"}}>10:30 am – 07:30 pm </h5></div>

        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
        <h5 style={{color:"#898989"}}>* Priority for Online Booking.</h5>

        <h5 style={{color:"#898989"}}>* Direct Visits are entertained based on slot availability</h5>
        </div>

      </div>

    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5784.930529455133!2d80.24933269599128!3d12.910569186976995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d4f6e73d667%3A0x14c2f96767f180b2!2sJUNGLII%20-%20PETTING%20ZOO%20(Concept%20Petshop)!5e0!3m2!1sen!2sin!4v1674664807125!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


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

export default LandingPage