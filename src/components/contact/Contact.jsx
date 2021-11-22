import './contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../contex';
import { useContext } from 'react';
export default function Contact() {
       const formRef = useRef()
       const [done , setDone] = useState(false)
       const theme = useContext(ThemeContext)
       function handleSubmit(e){
              e.preventDefault()
              emailjs.sendForm('service_hjfktcz',
               'template_lry5s8t',
                formRef.current,
              'user_gKervkgc76LrSwHxpOFba')
              .then((result) => {
                  console.log(result.text);
                  setDone(true)
              }, (error) => {
                  console.log(error.text);
              });
       }
       return (
              <div className="c">
                     <div className="c-bg"></div>
                     <div className="c-wrapper">
                            <div className="c-left">
                                   <h1 className="c-title">
                                          Let's discuss my project
                                   </h1>
                                   <div className="c-info">
                                          <div className="c-info-item">
                                          <i className=" icon1 fa-solid fa-phone-volume"></i>
                                          +998 95 019 24 69
                                          </div>
                                          <div className="  c-info-item">
                                          <i class=" icon2 fa-solid fa-envelope"></i>
                                          arslonBek0220@mail.com
                                          </div>
                                          <div className="c-info-item">
                                          <i class=" icon3 fa-solid fa-location-dot"></i>
                                          Chilonzor-7 Lutfiy street, 50/55
                                          </div>
                                   </div>
                            </div>
                            <div className="c-right">
                                   <p className="c-desc">
                                          <b>What's is your story ?</b>
                                          Get in touch. Always available for freelancing 
                                          if the right project comes along me.
                                   </p>
                                   <form ref={formRef} onSubmit={handleSubmit}>
                                          <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                                          <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="text" placeholder="Submit" name="user_submit" />
                                          <input style={{backgroundColor: theme.state.darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                                          <textarea placeholder="Message..." style={{backgroundColor: theme.state.darkMode && "#333"}} name="message" id="" cols="30" rows="10"></textarea>
                                          <button>Submit</button>
                                          {
                                                 done && "Thank you for messages..."
                                          }
                                   </form>
                            </div>
                     </div>
              </div>
       )
}
