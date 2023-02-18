import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import Style from './Booking.module.css'
import { useNavigate } from "react-router-dom";
function Booking() {
  const navigate = useNavigate();
  return (
    <>
        <div>
      {/* <div className={Style.tabSwitchContainer}>
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
      </div> */}

      <div className={Style.cardContainer}>

      <Card style={{ width: '100%' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
      <Card.Title>JUNGLII’S PETTING ZONE</Card.Title>
        <Card.Text>
        30MIN | 399
        </Card.Text>
        <button onClick={()=>navigate("petBooking")} className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S FARM FRIENDS</Card.Title>
        <Card.Text>
        35MIN | 599
        </Card.Text>
        <button className={Style.bookBtn} onClick={()=>navigate("farmBooking")}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '100%'}} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S REPTILE CRUSH</Card.Title>
        <Card.Text>
        40MIN | 999
        </Card.Text>
        <button onClick={()=>navigate("reptileBooking")} className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S VIP ZONE</Card.Title>
        <Card.Text>
        45MIN | 1499
        </Card.Text>
        <button onClick={()=>navigate("vipBooking")} className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' }} className={Style.boxShadow}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
      <Card.Body>
        <Card.Title>JUNGLII’S VVIP ZONE</Card.Title>
        <Card.Text>
        50MIN | 1999
        </Card.Text>
        <button onClick={()=>navigate("vvipBooking")} className={Style.bookBtn}>BOOK THIS</button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </>
  )
}

export default Booking