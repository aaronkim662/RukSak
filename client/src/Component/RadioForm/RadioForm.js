import React from 'react';

function RadioForm(props){

  return(
    <form className="radioForm"
    onClick={props.handleClick}>
      <input
        type="radio"
        name="day1"
        value='1-2'
        />
    </form>
  )
}

export default RadioForm;
