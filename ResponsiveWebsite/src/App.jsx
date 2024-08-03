import './App.css'

function Mybutton() {
  return (
    <>
      <button className="Mybotton">a button</button>
      <button>a button</button>
    </>
  );
}
function Mybutton1() {
  return (
    <>
      <button>a button</button>
    </>
  );
}

const products = [
  { title: 'Cabbage',isfrute : false, id: 1 },
  { title: 'Garlic',isfrute : false, id: 2 },
  { title: 'Apple',isfrute : true, id: 3 },
  { title: 'Pinaple',isfrute : true, id: 4 },
];


export default function App() {

  const listItems = products.map(
    product => 
    <li 
      key={product.id} 
      style={{
        color : product.isfrute ? 'red' : 'blue'
      }}
    >
      {product.title}
    </li>
  )

  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

