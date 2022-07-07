import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u09lerj', 'template_7so38ia', form.current, 'Tau3-mPKYE08QbxXY')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'> 
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        
      <article className="contact__option">
        <MdOutlineEmail className='contact_option-icon'  />
        <h4>Email</h4>
        <h5>mastitesfa444@gmail.com</h5>
        <a href='mailto:mastitesfa444@gmail.com' >Send a message</a>
      </article>

      <article className="contact__option">
        <FaTelegram className='contact_option-icon'/>
        <h4>Telegram</h4>
        <h5>@masti_777</h5>
        <a href='https://t.me/masti_777'>Send a message</a>
      </article>
      </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
           <input type='text' name='name' placeholder='Your Full Name' required />
           <input type='email' name='email' placeholder='Your Email' required />
           <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      
    </div>
     </section>
    
  )
}

export default Contact