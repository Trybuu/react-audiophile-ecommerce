import { Link } from 'react-router-dom'

export default function Headphones() {
  return (
    <>
      <h1>Speakers</h1>
      <ul>
        <li>
          <Link to="speaker-1">Speaker 1</Link>
        </li>
        <li>
          <Link to="speaker-2">Speaker 2</Link>
        </li>
      </ul>
    </>
  )
}
