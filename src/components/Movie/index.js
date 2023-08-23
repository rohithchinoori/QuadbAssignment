import './index.css'
import {Component} from 'react'
import MovieDetails from '../MovieDetails'

class Movie extends Component {
  state = {movieData: []}

  componentDidMount() {
    this.renderMovieData()
  }

  renderMovieData = async () => {
    const url = 'https://api.tvmaze.com/search/shows?q=all'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({movieData: data})
    }
  }

  movieSuccessView = () => {
    const {movieData} = this.state
    return (
      <ul className="movie-list">
        {movieData.map(eachMovie => (
          <MovieDetails key={eachMovie.show.id} details={eachMovie} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg">
        <h1 className="head">Tvmaze Shows & Movies</h1>
        {this.movieSuccessView()}
      </div>
    )
  }
}
export default Movie
