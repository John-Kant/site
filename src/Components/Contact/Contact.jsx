import React from 'react'

export default function Contact() {
    return (
        <section id="contact">
            <div className="inner-width">
                <h1 className="section-title">Get in touch</h1>
                <div className="contact-info">
                    <div className="item">
                        <i className="fas fa-mobile-alt" />
                        +111 111111111
                    </div>
                    <div className="item">
                        <i className="fas fa-envelope" />
                        email@address.com
                    </div>
                    <div className="item">
                        <i className="fas fa-map-marker-alt" />
                        New York, United States
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
