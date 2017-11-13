import React from 'react';
import { styles } from './Contact.css'; // eslint-disable-line 

const Contact = React.createClass({
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row contact-row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading contact-heading">Let's Get In Touch!</h2>
              <hr className="primary" />
              <p>Are you looking for a resource we don't have? Get in touch with us and we'll see what we can do to make your experience better!</p>
            </div>
            <div className="col-lg-4 col-lg-offset-2 text-center">
              <i className="contact-i fa fa-phone fa-3x sr-contact" crossOrigin="anonymous" data-sr-id="34"></i>
              <p>925-360-5153</p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="contact-i fa fa-envelope-o fa-3x sr-contact" crossOrigin="anonymous" data-sr-id="35" ></i>
              <p><a href="mailto:admin@hearthseattle.org">admin@hearthseattle.org</a></p>
            </div>
          </div>
        </div>
      </section>
    );
  },
});

export default Contact;
