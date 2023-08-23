import {Component} from 'react'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import Popup from 'reactjs-popup'

class SummaryDetails extends Component {
  state = {user: '', mail: '', seats: 0}

  getUsername = event => {
    this.setState({user: event.target.value})
  }

  getMail = event => {
    this.setState({mail: event.target.value})
  }

  getSeats = event => {
    this.setState({seats: event.target.value})
  }

  SubmitForm = event => {
    event.preventDefault()
    const {user, seats, mail} = this.state
    localStorage.setItem('username', user)
    localStorage.setItem('email', mail)
    localStorage.setItem('seats', seats)
  }

  render() {
    const {details} = this.props
    return (
      <li className="sum-bg">
        <img src={details.image.medium} alt="movie" className="img" />
        <div>
          <h1 className="sum">Summary:</h1>
          <p className="desc">{details.summary}</p>
          <div className="book">
            <p>
              <b>Language</b> : {details.language}
            </p>
            <Popup
              modal
              trigger={
                <button type="button" className="ticket">
                  Book Ticket
                </button>
              }
              className="pop"
            >
              {close => (
                <form className="pop" onSubmit={this.SubmitForm}>
                  <h1 className="title">{details.name}</h1>
                  <div className="input-cont">
                    <label htmlFor="user">USERNAME</label>
                    <input
                      type="text"
                      id="user"
                      className="input"
                      onChange={this.getUsername}
                    />
                  </div>
                  <div className="input-cont">
                    <label htmlFor="mail">EMAIL</label>
                    <input
                      type="email"
                      id="mail"
                      className="input"
                      onChange={this.getMail}
                    />
                  </div>
                  <div className="input-cont">
                    <label htmlFor="no">Number of Tickets</label>
                    <input
                      type="number"
                      className="input"
                      min={1}
                      id="no"
                      onChange={this.getSeats}
                    />
                  </div>
                  <button
                    type="button"
                    className="form-but"
                    onClick={() => close()}
                  >
                    close
                  </button>
                  <button className="form-but" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </Popup>
          </div>
        </div>
      </li>
    )
  }
}
export default SummaryDetails
