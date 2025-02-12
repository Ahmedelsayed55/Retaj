import { useState, useEffect } from 'react'
import './Dry.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dry = () => {
  const [drySweets, setDrySweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrySweets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/api/product/list?category=Dry');
        if (response.data.success) {
          setDrySweets(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrySweets();
  }, []);

  const handleDetailsClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!drySweets.length) return <div>لا توجد منتجات في هذه الفئة</div>;

  return (
    <div className="dry-container">
      <div className="dry-grid">
        {drySweets.map((product) => (
          <div key={product._id} className="product-card">
            <img 
              src={product.image[0]} 
              alt={product.name} 
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} جنيه</p>
            <div className="product-actions">
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
  );
};

export default Dry;
