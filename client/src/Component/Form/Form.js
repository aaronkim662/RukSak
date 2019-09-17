import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="formContainer">
        <div className="returnUsers">
          <h2>Returning Users</h2>
          <form className="returningForm"
            onSubmit={this.props.onSubmit}
          >
            <input
              type="text"
              placeholder="email"
              onChange={this.props.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.props.handleChange}
            />
          </form>
        </div>
        <div className="newUsers">
          <h2>New Users</h2>
          <form className="returningForm"
            onSubmit={this.props.onSubmit}
          >
            <input
              type="text"
              placeholder="username"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              placeholder="email"
              onChange={this.props.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.props.handleChange}
            />
          </form>
        </div>
      </div>

    )
  }
}
