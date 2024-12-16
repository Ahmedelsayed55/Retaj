import './Dry.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const drySweets = [
 {
    id: 1,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 2,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 3,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 4,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 5,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 6,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 7,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 8,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 9,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 10,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 11,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 12,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 13,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id:14,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 15,
    name: "حلويات شرقية",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
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
