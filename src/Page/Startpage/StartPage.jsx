import './StartPage.css'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const StartPage = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const promotions = [
    "خصم 20% على جميع أنواع الكنافة هذا الأسبوع! ",
    "جديد: البقلاوة بالفستق الحلبي ",
    "عرض خاص: اطلب حلويات بقيمة 200 ريال واحصل على توصيل مجاني "
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    { name: "فاطمة", text: "حلويات ريتاج هي الأفضل! الطعم رائع والجودة عالية جداً" },
    { name: "محمد", text: "خدمة ممتازة وتوصيل سريع. المنتجات دائماً طازجة ولذيذة" },
    { name: "نورة", text: "أفضل حلويات تذوقتها! الكنافة عندهم لا تقاوم" },
    { name: "عبدالله", text: "تجربة رائعة من البداية للنهاية. التغليف أنيق والطعم لا يُنسى" }
  ];

  return (
    <>
      <div className="startpage">
        <div className="promo-banner">
          <p className="animated-text">{promotions[currentPromo]}</p>
        </div>

        <h2>ريتاج من القلب للقلب</h2>
        
        <div className="featured-products">
          <h3>الأكثر مبيعاً</h3>
          <div className="products-grid">
            <div className="product-card">
              <h4>كنافة نابلسية</h4>
              <span className="rating">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="product-card">
              <h4>بقلاوة</h4>
              <span className="rating">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <h3>آراء عملائنا</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>{testimonial.text}</p>
                <span>- {testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="link">
          <NavLink to="/contact">
            <button className="animated-button">تواصل معنا</button>
          </NavLink>
          <NavLink to="/home">
            <button className="animated-button">تصفح منتجاتنا</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default StartPage
