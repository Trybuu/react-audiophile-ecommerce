import { Link } from 'react-router-dom'

export default function Headphones() {
  return (
    <>
      <h1>Earphones</h1>
      <ul>
        <li>
          <Link to="earphone-1">Earphone 1</Link>
        </li>
        <li>
          <Link to="earphone-2">Earphone 2</Link>
        </li>
      </ul>
    </>
  )
}
