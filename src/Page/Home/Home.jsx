import { useState, useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [featuredRes, bestSellerRes, newRes, adsRes] = await Promise.all([
         await axios.get('http://localhost:4000/api/product/list?isFeatured=true'),
         await axios.get('http://localhost:4000/api/product/list?bestSeller=true'),
         await axios.get('http://localhost:4000/api/product/list?isNew=true'),
         await axios.get('http://localhost:4000/api/ads/list?active=true')
        ]);

        if (featuredRes.data.success && bestSellerRes.data.success && newRes.data.success && adsRes.data.success) {
          setFeaturedProducts(featuredRes.data.products);
          setBestSellers(bestSellerRes.data.products);
          setNewProducts(newRes.data.products);
          setAds(adsRes.data.ads);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (error) return <div className="error">حدث خطأ: {error}</div>;

  return (
    <div className="home">
      {/* قسم السلايدر */}
      {ads && ads.length > 0 && (
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
            {ads.map((ad) => (
              <SwiperSlide key={ad._id}>
                <div className="slide-content">
                  <img src={ad.image} alt={ad.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

       {newProducts.length > 0 && (
        <div className="new-products">
          <div className="container">
            <h2 className="section-title">وصل حديثاً</h2>
            <div className="products-grid">
              {newProducts.slice(0, 4).map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image">
                    <img src={product.image[0]} alt={product.name} />
                    <span className="badge new">جديد</span>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">{product.price.toFixed(2)} ج.م</p>
                    <button 
                      className="details-button"
                      onClick={() => handleDetailsClick(product._id)}
                    >
                      التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* قسم الأقسام الرئيسية */}
      <div className="sections">
        <div className="container">
          <h2>الأقسام</h2>
          <div className="sections-grid">
            <div className="section-item">
              <img src={featuredProducts[0]?.image[0]} alt="حلويات شرقية" />
              <Link to="/oriental"><button className="shop-now">تسوق الآن</button></Link>
              <div className="overlay"></div>
            </div>
            <div className="section-item large">
              <img src={featuredProducts[1]?.image[0]} alt="نواشف" />
              <Link to="/dry"><button className="shop-now">تسوق الآن</button></Link>
              <div className="overlay"></div>
            </div>
            <div className="section-item">
              <img src={featuredProducts[2]?.image[0]} alt="حلويات غربية" />
              <Link to="/western"><button className="shop-now">تسوق الآن</button></Link>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم المنتجات المميزة */}
      {featuredProducts.length > 0 && (
        <div className="featured-products">
          <div className="container">
            <h2 className="section-title">منتجات مميزة</h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="products-slider"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30
                }
              }}
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={product.image[0]} alt={product.name} />
                      {product.isNew && <span className="badge new">جديد</span>}
                      {product.bestSeller && <span className="badge bestseller">الأكثر مبيعاً</span>}
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="price">{product.price.toFixed(2)} ج.م</p>
                      <button 
                        className="details-button"
                        onClick={() => handleDetailsClick(product._id)}
                      >
                        التفاصيل
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* قسم المنتجات الأكثر مبيعاً */}
      {bestSellers.length > 0 && (
        <div className="best-sellers">
          <div className="container">
            <h2 className="section-title">الأكثر مبيعاً</h2>
            <div className="products-grid">
              {bestSellers.slice(0, 4).map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image">
                    <img src={product.image[0]} alt={product.name} />
                    {product.isNew && <span className="badge new">جديد</span>}
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">{product.price.toFixed(2)} ج.م</p>
                    <button 
                      className="details-button"
                      onClick={() => handleDetailsClick(product._id)}
                    >
                      التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* قسم المنتجات الجديدة */}
     
    </div>
  );
};

export default Home;
