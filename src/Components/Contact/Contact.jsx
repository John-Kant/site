import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact">
            <div className="inner-width">
                <h1 className="section-title">Get in touch</h1>
                <div className="contact-info">
                    <div className="item">
                        <i className="fas fa-mobile-alt" />
                        +48 729289235 <br/>
                        +48 729289235
                    </div>
                    <div className="item">
                        <i className="fas fa-envelope" />
                        johngomez5541@yahoo.com
                    </div>
                    <div className="item">
                        <i className="fas fa-map-marker-alt" />
                        Poznan, Poland
                    </div>
                </div>
                <form action="#" className="contact-form">
                    <input type="text" className="nameZone" placeholder="Your Full Name" />
                    <input type="email" className="emailZone" placeholder="Your Email" />
                    <input type="text" className="subjectZone" placeholder="Subject" />
                    <textarea className="messageZone" placeholder="Message" defaultValue={""} />
                    <input type="submit" defaultValue="Send Message" className="btn" />
                </form>
            </div>
        </section>

    )
}
