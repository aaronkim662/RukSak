import React from 'react'

class Planning extends React.Component {
  state = {
    days: "",
    people: "",
    location: "",
  }

  handleClick = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div className="planning">
          <div className="camping">
            <h2>Camping</h2>
            <div className="daysSelection"></div>
            <div className="peopleSelection"></div>
            <div className="recommended"></div>
          </div>
          <div className="itinerary"></div>
            <div className="days"></div>
            <div className="people"></div>
            <div className="location"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Planning
