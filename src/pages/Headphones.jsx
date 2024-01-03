import { Link } from 'react-router-dom'

import { products } from '../../public/data/data.js'

export default function Headphones() {
  const headphones = products.filter(
    (product) => product.category === 'headphones',
  )
  return (
    <>
      <h1>Headphones</h1>
      <ul>
        {headphones.map((el) => (
          <li key={el.id}>
            <div>
              <img src={el.mainImage} alt={`${el.name} main image`} />
              <h2>{el.name}</h2>
              <p>{el.shortDescription}</p>
              <Link to={`/${el.category}/${el.id}`}>See product</Link>
            </div>
          </li>
        ))}
        <li>
          <Link to="1">Headphones 1</Link>
        </li>
      </ul>
    </>
  )
}
