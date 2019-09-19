import React from 'react';
import './radioForm.css';

class RadioForm extends React.Component {
state = {
  checked: false
}

handleClick = (e) => {
  e.preventDefault();
  this.setState({
    checked: e.target.value
  })
}

render(){
  console.log('props', this.props.days)
  console.log('people', this.props.people)

    return(
      <>
      <div className="radioForm">
        <form className="radioDays"
        >
        <label
          for="radioButtonLabel"
          >
          Days: </label>
          <input
            className="radioInputStyleD1"
            id="radioButtonLabel"
            type="radio"
            name="day1"
            value='1-2'
            checked={this.props.days === '1-2' ? true : false}
            onClick={this.props.handleClick}
            />
            <div>1-2</div>
          <input
            className="radioInputStyleD"
            type="radio"
            name="day1"
            value='3-4'
            checked={this.props.days === '3-4' ? true : false}
            onClick={this.props.handleClick}
            />
            <div>3-4</div>
          <input
            className="radioInputStyleD"
            type="radio"
            name="day1"
            value='5-6'
            checked={this.props.days === '5-6' ? true : false}
            onClick={this.props.handleClick}
            />
            <div>5-6</div>
          <input
            className="radioInputStyleD"
            type="radio"
            name="day1"
            value='7+'
            checked={this.props.days === '7+' ? true : false}
            onClick={this.props.handleClick}
            />
            <div>7+</div>
          </form>
          <form className="radioPeople"
          >
          <label
            for="radioButtonPeople"
            >
            People: </label>
            <input
              className="radioInputStyleP"
              type="radio"
              id="radioButtonPeople"
              name="people1"
              value='1-2'
              checked={this.props.people === '1-2' ? true : false}
              onClick={this.props.handleClickPeople}
              />
              <div>1-2</div>
            <input
              className="radioInputStyleP"
              type="radio"
              name="people2"
              value='3-4'
              checked={this.props.people === '3-4' ? true : false}
              onClick={this.props.handleClickPeople}
              />
              <div>3-4</div>
            <input
              className="radioInputStyleP"
              type="radio"
              name="people3"
              value='5-6'
              checked={this.props.people === '5-6' ? true : false}
              onClick={this.props.handleClickPeople}
              />
              <div>5-6</div>
            <input
              className="radioInputStyleP"
              type="radio"
              name="people4"
              value='7+'
              checked={this.props.people === '7+' ? true : false}
              onClick={this.props.handleClickPeople}
              />
              <div>7+</div>
            </form>
          </div>
        </>
    )
  }
}

export default RadioForm;
