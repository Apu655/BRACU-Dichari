import React from 'react'
import Navbar from '../components/Navbar'
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact-body'>
        <Navbar scroll={false}/>
            <section id="contact">
        <div className="contact-box">
        <div className="contact-links">
            <h2 className='header-2'>BRACU DICHARI CONTACT</h2>
            <div className="links">
            <div className="link">
                <a href="https://www.facebook.com/bracudichari" target="_blank"><FaFacebookSquare className='h-12 w-12 text-white'/></a>
            </div>
            <div className="link">
                <a href="https://www.linkedin.com/company/bracudichari/" target="_blank"><FaLinkedin className='h-12 w-12 text-white'/></a>
            </div>

            <iframe className="border-2 rounded h-2/3 w-2/3 mt-10"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14604.321425585482!2d90.407157!3d23.7801527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x210f65a620d53ea8!2sBRACU%20Dichari!5e0!3m2!1sen!2sbd!4v1657818339190!5m2!1sen!2sbd"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="contact-form-wrapper">
            <form>
            <div className="form-item">
                <input type="text" name="sender" required/>
                <label>Name:</label>
            </div>
            <div className="form-item">
                <input type="text" name="email" required/>
                <label>Email:</label>
            </div>
            <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>Message:</label>
            </div>
            <button className="submit-btn">Send</button>  
            </form>
        </div>
        </div>
    </section>
  </div>
  )
}

export default Contact