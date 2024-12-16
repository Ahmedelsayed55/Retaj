import './Western.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const westernSweets = [
  {
    id: 201,
    name: "حلويات غربية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 202,
    name: "حلويات غربية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 203,
    name: "حلويات غربية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 204,
    name: "حلويات غربية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 205,
    name: "حلويات غربية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  }
];

const Western = () => {
  return (
    <div className="container">
      <div className="product-grid">
        {westernSweets.map((sweet) => (
          <div key={sweet.id} className="product-card">
            <div className="image-container">
              <img src={sweet.image} alt={sweet.name} />
            </div>
            <div className="product-info">
              <h3>{sweet.name}</h3>
              <p className="desc">{sweet.desc}</p>
              <p className="price">{sweet.price} جنيه</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Western;
