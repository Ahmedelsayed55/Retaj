import './Oriental.css'
import imag1 from '../../assets/301874856_460227866149274_9104408851150480673_n.jpg'
import imag2 from '../../assets/ta5f.jpg'

const orientalSweets = [
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 1,
    name: "تخفيضات",
    image: imag2,
    desc: "الوصف الخاص بالمنتج",
    price: 150
  },
  {
    id: 2,
    name: "حلويات شرقية",
    image: imag1,
    desc: "الوصف الخاص بالمنتج",
    price: 200
  }
];

const Oriental = () => {
  return (
    <div className="oriental-container">
      <div className="oriental-grid">
        {orientalSweets.map((sweet) => (
          <div key={sweet.id} className="oriental-card">
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

export default Oriental
