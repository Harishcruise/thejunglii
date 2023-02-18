import React, {useRef} from 'react'
import Style from './CustomModal.module.css'
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';

function CustomModal(props) {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current.user_email.value)
        emailjs.sendForm('service_ielyymk', 'template_yt2p8hp', form.current, 'mKPOMnaafbMM3wtIL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <form ref={form} onSubmit={sendEmail}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <div className={Style.container}>
      <div className={Style.inputCont}>
      <label className={Style.label}>Name</label>
      <input className={Style.input} type="text" name="user_name" />
      </div>

      <div className={Style.inputCont}>
      <label className={Style.label}>Email</label>
      <input className={Style.input} type="email" name="user_email" />
      </div>
      {/* <label>Message</label>
      <textarea name="message" /> */}
      </div>
    
      </Modal.Body>
      <Modal.Footer>
      <input className={Style.button} type="submit" onClick={props.onHide} value="submit" />
        {/* <Button >submit</Button> */}
      </Modal.Footer>
      </form>
    </Modal>
  )
}

export default CustomModal