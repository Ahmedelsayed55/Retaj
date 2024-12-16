import './Oriental.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const orientalSweets = [
  {
    id: 101,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 102,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 103,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 104,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 105,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  }
];

const Oriental = () => {
  return (
    <div className="container">
      <div className="product-grid">
        {orientalSweets.map((sweet) => (
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

export default Oriental;