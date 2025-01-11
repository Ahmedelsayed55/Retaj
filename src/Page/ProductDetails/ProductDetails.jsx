import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';
import { FaArrowRight } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/api/product/${id}`);
        if (response.data.success) {
          setProduct(response.data.product);
          if (response.data.product.image && response.data.product.image.length > 0) {
            setSelectedImage(0);
          }
        } else {
          setError('Failed to fetch product details');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="not-found">لم يتم العثور على المنتج</div>;

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={handleGoBack}>
        <FaArrowRight /> رجوع
      </button>
      
      <div className="product-details-card">
        <div className="product-images">
          <div className="main-image-container">
            <img 
              src={product.image[selectedImage]} 
              alt={product.name} 
              className="main-image" 
            />
          </div>
          {product.image.length > 1 && (
            <div className="image-thumbnails">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} - ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            {product.isNew && <span className="badge new">جديد</span>}
            {product.bestSeller && <span className="badge bestseller">الأكثر مبيعاً</span>}
          </div>

          <div className="product-meta">
            <div className="price-tag">
              <span className="price">{product.price.toFixed(2)} ج.م</span>
            </div>
            <div className="category-tag">
              <span className="category">
                {product.category === 'Dry' && 'نواشف'}
                {product.category === 'Oriental' && 'حلويات شرقية'}
                {product.category === 'Western' && 'حلويات غربية'}
              </span>
            </div>
          </div>

          <div className="product-description">
            <h3>الوصف</h3>
            <p>{product.description}</p>
          </div>

          {product.isFeatured && (
            <div className="featured-badge">
              <span>منتج مميز</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
