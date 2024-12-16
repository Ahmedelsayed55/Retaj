
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>معلومات التواصل</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>01002003849</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>01022204910</span>
            </div>
          
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>بلطيم . المدينه الصناعيه . شركة الدلتا للصناعات الغذائيه</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>الأقسام</h3>
          <ul className="categories-list">
            <li><Link to="/eastern">حلويات شرقي</Link></li>
            <li><Link to="/western">حلويات غربي</Link></li>
            <li><Link to="/dry">نواشف</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="quick-links">
            <li><Link to="/about">تفاصيل عنا</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
            {/* <li><Link to="/startpage">اراء عملاءنا </Link></li> */}
            <div className="contact-item">
              <FaFacebook className="contact-icon" />
              <a href="https://www.facebook.com/retajpastry?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                صفحتنا على فيسبوك
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} مصنع ريتاج للحلويات</p>
      </div>
    </footer>
  );
};

export default Footer;
