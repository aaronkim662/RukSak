import React from 'react'
import RadioForm from '../RadioForm/RadioForm';
import './planning.css'

class Planning extends React.Component {
  state = {
    days: "",
    people: "",
    location: "",
  }

  handleClick = (e) => {
    this.setState({
      days: e.target.value
    })
  }

  handleClickPeople = (e) => {
    this.setState({
      people: e.target.value
    })
  }
  render() {
    console.log('plan', this.props.gear)
    return (
      <React.Fragment>
      <div className="photo-container">
        <img
        className='photoPlanning'
        src="https://res.cloudinary.com/radiscipio/image/upload/c_fill,g_center,h_1000,w_4356,y_100/v1568906055/w3e5kc1ahvg0ivzucyim.jpg" alt='Planning'/>
      </div>
        <div className="planning-container">


          {/* BELOW IS TRIP TYPE DAY/PEOPLE CONTAINER */}

          <div className="camping">
            <h2 className="tripHeader">Plan Your Trip!</h2>
            <div className="tripSelectors">
              <label
                for="location">Enter Location: </label>
              <input
                className="tripSelectors typeLocation"
                type="text"
                name="location"
                placeholder="location"
              />
              <RadioForm
                className="tripSelectors"
                days={this.state.days}
                people={this.state.people}
                handleClickPeople={this.handleClickPeople}
                handleClick={this.handleClick}
              />
            </div>
            <button
              onClick={(e) => this.props.handleTripClick(e)}
              type="submit">Finalize</button>
          </div>

    {/* BELOW IS RECOMMENDED LIST CONTAINER */}
        <div className="recommended-list-container">
          <h2 className="recommended-list-header">Recommended List</h2>
          <h4 className="recommended-list-header">(Select Items to Add to Gear)</h4>
          {this.props.gear.map((ele,i) => {
            return(
              <ul className="recommended-list-ul">
                <li
                className="recommended-list-li"
                onClick={()=>this.props.handleGearClick(ele)}>{ele.gear}</li>
               </ul>
              )
            })
          }
        </div>
        {/* BELOW IS CURRENT LIST CONTAINER */}
          <div className="current-list-container">
            <h2>Itinerary</h2>
            <div className="location">
              Location: {this.state.location}</div>
            <div className="days">
              Days: {this.state.days}</div>
            <div className="people">
              People: {this.state.people}</div>
            <div className="gear">
              Gear:
              <div className="gear-list">
                {this.props.selectedGear.map((ele,i) => {
                  return(
                    <li
                      className="current-list-li"
                      index={i}
                      onClick={() => this.props.handleRemoveClick(i)}>- {ele}</li>
                    )
                  })
                }
              </div>
            </div>
            </div>
          </div>

      </React.Fragment>
    )
  }
}

export default Planning
