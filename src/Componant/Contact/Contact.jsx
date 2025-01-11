import './Contact.css'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

const Contact = () => {
  return (
    <div className="contact-container">



<Accordion defaultActiveKey="0" flush>
  <h1>فروعنا</h1>
      <Accordion.Item eventKey="0" className="location-item">
        <Accordion.Header>مقر المصنع</Accordion.Header>
        <Accordion.Body>
        <div className="location-details">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0673960839493!2d31.10643017609697!3d31.543026474305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73c9699d0e13d%3A0x903b4db60ebccbea!2z2LTYsdmD2Kkg2LTZhdin2YQg2KfZhNiv2YTYqtin2YQg2YTZhNi12YbYp9i52KfYqiDYp9mE2LrYsNin2KbZitip2Yxb2K3ZhNmI2KfZhtuKINix2YrYqtin2KxdJUE2JTgw!5e0!3m2!1sar!2seg!4v1702472016074!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-info">
            <h3><FaMapMarkerAlt /> العنوان</h3>
            <p>بلطيم المدينه الصناعيه</p>
            
            <h3><FaClock /> ساعات العمل</h3>
            <p>من 9 صباحاً حتى 11 مساءً</p>
            <h3><FaPhone /> للتواصل</h3>
            <p>01002003849 <FaPhone />بلطيم</p>
            <p>01022204917 <FaPhone />بلطيم</p>
            <p>01022204910 <FaPhone />الرياض</p>
            <p>
              <a href="https://wa.me/+0201090222129" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> تواصل معنا عبر الواتساب
              </a>
            </p>
          </div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>بلطيم</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>الرياض</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>دمياط</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>سيدي سالم</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>





      {/* ///////////////////////////////////// */}
      {/* ///////////////////////////////////// */}
      {/* ///////////////////////////////////// */}
      {/* ///////////////////////////////////// */}
      {/* ///////////////////////////////////// */}
      {/* ///////////////////////////////////// */}
      {/* <div className="contact-section">
        <h2>موقعنا</h2>
        <div className="location-details">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0673960839493!2d31.10643017609697!3d31.543026474305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73c9699d0e13d%3A0x903b4db60ebccbea!2z2LTYsdmD2Kkg2LTZhdin2YQg2KfZhNiv2YTYqtin2YQg2YTZhNi12YbYp9i52KfYqiDYp9mE2LrYsNin2KbZitip2Yxb2K3ZhNmI2KfZhtuKINix2YrYqtin2KxdJUE2JTgw!5e0!3m2!1sar!2seg!4v1702472016074!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address-info">
            <h3><FaMapMarkerAlt /> العنوان</h3>
            <p>بلطيم المدينه الصناعيه</p>
            
            <h3><FaClock /> ساعات العمل</h3>
            <p>من 9 صباحاً حتى 11 مساءً</p>
            <h3><FaPhone /> للتواصل</h3>
            <p>01002003849 <FaPhone />بلطيم</p>
            <p>01022204917 <FaPhone />بلطيم</p>
            <p>01022204910 <FaPhone />الرياض</p>
            <p>
              <a href="https://wa.me/+0201090222129" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> تواصل معنا عبر الواتساب
              </a>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Contact
