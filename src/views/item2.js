import { useSelector } from 'react-redux';

import './Items2.css';

export default function Item2() {
  const data = useSelector((state) => {
    return state
  });
 
  return (
    <div className="bg-items2">
      <h1>Item two</h1>
      <h4>Lista</h4>
      <ul>{data.shop.customer.nome}</ul>
    </div>
  )
}
