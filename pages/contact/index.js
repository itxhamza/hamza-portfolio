import React from "react";

import HeaderTwo from "../../src/components/Header/HeaderTwo";
import Footer from "../../src/components/Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <main className="ms-main">
        <div className="ms-page-content">
          <div className="contact-map-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="contact-map-area-fluid">
                    <iframe
                      className="contact-map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area contact">
            <div className="container">
              <div className="contact-area-inner">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content">
                      <h2 className="title">
                        Got A Project Or <br /> A Partnership In Mind?
                      </h2>
                      <p className="desc">
                        Your vision deserves expert craftsmanship and meticulous
                        attention to detail. Each project or partnership
                        presents a unique opportunity for innovation and growth.
                        With years of experience in the field, I'm poised to
                        bring your ideas to fruition. Let's discuss aspirations,
                        map out strategies, and embark on a journey of success.
                        Reach out, and let's elevate your goals together.
                      </p>
                    </div>
                    <div className="row contact">
                      <ul className="col-lg-6 phone">
                        <li className="tag">Phone:</li>
                        <li>
                          <a href="tel:+923062434190">+92 328 9494 027</a>
                        </li>
                      </ul>
                      <ul className="col-lg-6 email">
                        <li className="tag">Email:</li>
                        <li>
                          <a href="mailto:itxhamzajaved@gmail.com">
                            itxhamzajaved@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
