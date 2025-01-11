import { useState, useEffect } from 'react'
import '../Dry/Dry.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Oriental = () => {
  const [orientalSweets, setOrientalSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrientalSweets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/api/product/list?category=Oriental');
        console.log('API Response:', response.data);
        if (response.data.success) {
          setOrientalSweets(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching oriental sweets:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrientalSweets();
  }, []);

  const handleDetailsClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (error) return <div className="error">حدث خطأ: {error}</div>;
  if (!orientalSweets.length) return <div>لا توجد منتجات في هذه الفئة</div>;

  return (
    <div className="dry-container">
      <div className="dry-grid">
        {orientalSweets.map((sweet) => (
          <div key={sweet._id} className="product-card">
            <img 
              src={sweet.image[0]} 
              alt={sweet.name} 
              className="product-image"
            />
            <h3 className="product-name">{sweet.name}</h3>
            <p className="product-price">{sweet.price} جنيه</p>
            <div className="product-actions">
              <button 
                className="details-button"
                onClick={() => handleDetailsClick(sweet._id)}
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

export default Oriental;