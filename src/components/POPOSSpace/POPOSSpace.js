// src/POPOSSpace.js
import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  // Get the
  const { name, image, address, hours, id } = props
  console.log(`https://alajream.github.io/sfpopos/images/${image}`)
  return (
    <div className="POPOSSpace">
      <h1>
        <Link
          className="POPOSSpace-title" // add a class name!
          to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`https://alajream.github.io/sfpopos/images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <div className="POPOSSpace-info">
				<div >{address}</div>
				<div>{hours}</div>
			</div>
    </div>
  )
}

export default POPOSSpace