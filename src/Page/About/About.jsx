import './About.css';
import { FaMedal, FaHistory, FaHandshake, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>مرحباً بكم في مصنع ريتاج</h1>
        <p>حيث نصنع الحلويات بحب وإبداع منذ عام 2010</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="" alt="مصنع ريتاج للحلويات" />
        </div>
        
        <div className="about-text">
          <h2>قصتنا</h2>
          <p>
            بدأت رحلة مصنع ريتاج في عام 2010 بحلم بسيط: تقديم أجود أنواع الحلويات الشرقية والغربية
            لعملائنا الكرام. منذ ذلك الحين، نمونا وتطورنا، محافظين على جودتنا وأصالتنا.
          </p>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <FaMedal className="feature-icon" />
          <h3>الجودة العالية</h3>
          <p>نستخدم أفضل المكونات ونتبع أعلى معايير الجودة في التصنيع</p>
        </div>

        <div className="feature-item">
          <FaHistory className="feature-icon" />
          <h3>خبرة عريقة</h3>
          <p>أكثر من 13 عاماً من الخبرة في صناعة الحلويات</p>
        </div>

        <div className="feature-item">
          <FaHandshake className="feature-icon" />
          <h3>خدمة متميزة</h3>
          <p>نلتزم بتقديم أفضل خدمة لعملائنا وتلبية جميع احتياجاتهم</p>
        </div>

        <div className="feature-item">
          <FaCertificate className="feature-icon" />
          <h3>شهادات الجودة</h3>
          <p>حاصلون على شهادات جودة معتمدة في صناعة الحلويات</p>
        </div>
      </div>

      <div className="values">
        <h2>قيمنا</h2>
        <div className="values-content">
          <div className="value-item">
            <h3>الجودة</h3>
            <p>نضمن أعلى مستويات الجودة في كل منتجاتنا</p>
          </div>
          <div className="value-item">
            <h3>الابتكار</h3>
            <p>نسعى دائماً لتقديم وصفات جديدة ومبتكرة</p>
          </div>
          <div className="value-item">
            <h3>النظافة</h3>
            <p>نلتزم بأعلى معايير النظافة والسلامة الغذائية</p>
          </div>
          <div className="value-item">
            <h3>رضا العملاء</h3>
            <p>رضا عملائنا هو أولويتنا الأولى</p>
          </div>
        </div>
      </div>

      <div className="achievements">
        <h2>إنجازاتنا</h2>
        <div className="achievements-content">
          <div className="achievement-item">
            <h3>+1000</h3>
            <p>عميل سعيد</p>
          </div>
          <div className="achievement-item">
            <h3>+50</h3>
            <p>صنف من الحلويات</p>
          </div>
          <div className="achievement-item">
            <h3>3</h3>
            <p>فروع في مصر</p>
          </div>
          <div className="achievement-item">
            <h3>13</h3>
            <p>سنة خبرة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
