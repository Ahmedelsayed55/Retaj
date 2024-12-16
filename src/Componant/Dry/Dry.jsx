import './Dry.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const drySweets = [
  {
    id: 301,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 302,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 303,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 304,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 305,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  }
];

const Dry = () => {
  return (
    <div className="container">
      <div className="product-grid">
        {drySweets.map((sweet) => (
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

export default Dry;
