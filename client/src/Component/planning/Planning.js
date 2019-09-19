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
        <img
        className='photoPlanning'
        src="https://i.imgur.com/vVIAXS0.jpg" alt='Camping'/>
        <div className="planning-container">

    {/* BELOW IS RECOMMENDED LIST CONTAINER */}

          <div className="recommended-list-container">
            <h4>Recommended List (Select Items to Add to Itinerary)</h4>
            {this.props.gear.map((ele,i) => {
              return(
                <li onClick={()=>this.props.handleGearClick(ele)}>{ele.gear}</li>
                )
              })
            }
          </div>



    {/* BELOW IS TRIP TYPE DAY/PEOPLE CONTAINER */}

          <div className="camping">
            <h2>Camping</h2>
              <RadioForm
                days={this.state.days}
                people={this.state.people}
                handleClickPeople={this.handleClickPeople}
                handleClick={this.handleClick}
              />
          </div>



        {/* BELOW IS CURRENT LIST CONTAINER */}

          <div className="current-list-container">
            <h4>Current List</h4>
            <div className="days">
              Days {this.state.days}</div>
            <div className="people">
            People {this.state.people}</div>
              {this.props.selectedGear.map((ele,i) => {
                return(
                  <li index={i}
                    onClick={() => this.props.handleRemoveClick(i)}>{ele}</li>
                )
              })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Planning
