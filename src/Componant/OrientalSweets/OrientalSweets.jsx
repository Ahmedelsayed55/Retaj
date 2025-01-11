import { useState, useEffect } from 'react'
import '../Dry/Dry.css'
import axios from 'axios'

const OrientalSweets = () => {
  const [orientalSweets, setOrientalSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrientalSweets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/api/product/list?category=Oriental');
        if (response.data.success) {
          setOrientalSweets(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrientalSweets();
  }, []);

  const handleDetailsClick = (productId) => {
    // يمكنك إضافة التوجيه إلى صفحة التفاصيل هنا
    console.log('View details for product:', productId);
  };

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dry-container">
      <div className="dry-grid">
        {orientalSweets.map((product) => (
          <div key={product._id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toFixed(2)} ج.م</p>
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

export default OrientalSweets;
