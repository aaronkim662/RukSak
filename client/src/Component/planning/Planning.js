import React from 'react'
import RadioForm from '../RadioForm/RadioForm';

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
        <div className="planning">
          <div className="camping">
            <h2>Camping</h2>
              <RadioForm
                days={this.state.days}
                people={this.state.people}
                handleClickPeople={this.handleClickPeople}
                handleClick={this.handleClick}
              />
            <div className="recommended"></div>
          </div>
          <div>Recommended List</div>
          {this.props.gear.map((ele,i) => {
            return(
              <li onClick={()=>this.props.handleGearClick(ele)}>{ele.gear}</li>
            )
          })
        }
        <div>Current List</div>
          {this.props.selectedGear.map((ele,i) => {
            return(
              <li index={i}
                onClick={() => this.props.handleRemoveClick(i)}>{ele}</li>
            )
          })
        }
          <div className="itinerary"></div>
            <div className="days">
            Days {this.state.days}</div>
            <div className="people">
            People {this.state.people}</div>
            <div className="location"></div>
        </div>
        <div className="gearList">
        </div>
      </React.Fragment>
    )
  }
}

export default Planning
