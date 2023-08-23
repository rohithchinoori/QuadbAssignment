import {Component} from 'react'
import SummaryDetails from '../SummaryDetails'
import './index.css'

class MovieSummary extends Component {
  state = {Movies: []}

  componentDidMount() {
    this.showSummary()
  }

  showSummary = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.tvmaze.com/shows/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const dataList = []
    dataList[0] = data
    if (response.ok === true) {
      this.setState({Movies: dataList})
    }
  }

  showResult = () => {
    const {Movies} = this.state
    return (
      <ul className="ul">
        {Movies.map(eachShow => (
          <SummaryDetails key={eachShow.id} details={eachShow} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="bg-1">
          <h1 className="head">Movie Details</h1>
          {this.showResult()}
        </div>
      </>
    )
  }
}
export default MovieSummary
