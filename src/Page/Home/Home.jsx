import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { mainSliderData, featuredProducts, bestSellers } from "../../api/homeData";

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <Swiper
          effect={"fade"}
          fadeEffect={{
            crossFade: true
          }}
          speed={1500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Autoplay, Navigation, EffectFade]}
          className="main-slider"
        >
          {mainSliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content">
                <img src={slide.image} alt={slide.title} />
                <div className="slide-overlay">
                  {/* <h2>{slide.title}</h2>
                  <p>{slide.description}</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="featured-product">
        <div className="container">
          <h2>منتجات مميزة</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">{product.price.toFixed(2)} ج.م</p>
                  <div className="card-actions">
                    <button className="heart-btn"><i className="far fa-heart"></i></button>
                    <button className="cart-btn"><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      <div className="sections">
        <div className="container">
          <h2>الأقسام</h2>
          <div className="sections-grid">
            <div className="section-item">
              <img src={featuredProducts[0].image} alt="حلويات شرقية" />
              <Link to="/oriental"><button className="shop-now">تسوق الآن</button></Link>
            
              <div className="overlay"></div>
            </div>
            <div className="section-item large">
              <img src={featuredProducts[1].image} alt="شوكولاتة" />
              <Link to="/dry"><button className="shop-now">تسوق الآن</button></Link>

              <div className="overlay"></div>
            </div>
            <div className="section-item">
              <img src={featuredProducts[2].image} alt="معجنات" />
              <Link to="/western"><button className="shop-now">تسوق الآن</button></Link>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-selling">
      <div className="container">
          <h2>الأكثر مبيعا</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: { // للأجهزة الصغيرة مثل الهواتف
                slidesPerView: 2, // عرض 2 شريحة
              },
              768: { // للأجهزة اللوحية والشاشات المتوسطة
                slidesPerView: 3, // عرض 3 شرائح
              },
              1024: { // لأجهزة الكمبيوتر والشاشات الكبيرة
                slidesPerView: 4, // عرض 4 شرائح
              },
            }}
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">{product.price.toFixed(2)} ج.م</p>
                  <div className="card-actions">
                    <button className="heart-btn"><i className="far fa-heart"></i></button>
                    <button className="cart-btn"><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      {/* /////////////////////////////////// */}
      {/* /////////////////////////////////// */}
      <div className="best-selling">
      <div className="container">
          <h2>الجديد</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: { // للأجهزة الصغيرة مثل الهواتف
                slidesPerView: 2, // عرض 2 شريحة
              },
              768: { // للأجهزة اللوحية والشاشات المتوسطة
                slidesPerView: 3, // عرض 3 شرائح
              },
              1024: { // لأجهزة الكمبيوتر والشاشات الكبيرة
                slidesPerView: 4, // عرض 4 شرائح
              },
            }}
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">{product.price.toFixed(2)} ج.م</p>
                  <div className="card-actions">
                    <button className="heart-btn"><i className="far fa-heart"></i></button>
                    <button className="cart-btn"><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;
