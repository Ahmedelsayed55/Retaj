import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/301874856_460227866149274_9104408851150480673_n.jpg";
import { FaPhone } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="links">
          <NavLink to="/western">غربي</NavLink>
          <NavLink to="/oriental">شرقي</NavLink>
          <NavLink to="/dry">نواشف</NavLink>
          <NavLink to="/about">تفاصيل عنا</NavLink>
          <NavLink to="/home">الصفحه الرئيسيه</NavLink>
          <NavLink to="/contact">
            <button className="contact-btn"><FaPhone /></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
