import './Western.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const westernSweets = [
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 2,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 3,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 4,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 5,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 6,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 7,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 8,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 9,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 10,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 11,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 12,
    name: "حلويات جافة",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  },
  {
    id: 13,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  }
  // يمكنك إضافة المزيد من المنتجات هنا
];

const Western = () => {
  return (
    <div className="western-container">
      <div className="western-grid">
        {westernSweets.map((sweet) => (
          <div key={sweet.id} className="western-card">
            <img src={sweet.image} alt={sweet.name} />
            <div className="content">
              <h3>{sweet.name}</h3>
              <p className="desc">{sweet.desc}</p>
              <p className="price">{sweet.price} جنيه</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default Western
