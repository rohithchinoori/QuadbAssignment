import {Link} from 'react-router-dom'
import './index.css'

const MovieDetails = props => {
  const {details} = props
  const {show} = details
  const {id} = show
  const {image, officialSite} = show
  const url =
    image !== null
      ? image.medium
      : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
  const officialUrl = officialSite !== null ? officialSite : null
  const path = `/summary/${id}`

  return (
    <li className="card">
      <h1 className="name">{show.name}</h1>
      <img src={url} alt="show" className="image" />
      <div>
        <button type="button" className="but">
          <a
            href={officialUrl}
            className="anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Clip
          </a>
        </button>
        <Link to={path}>
          <button type="button" className="but">
            More Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieDetails
