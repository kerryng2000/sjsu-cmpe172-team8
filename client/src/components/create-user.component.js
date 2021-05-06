import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(data) {
    super(data);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      City: '',
    }
  }

  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }
  onChangeCity(e) {
    this.setState({
      City: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      City: this.state.City
    }

    console.log(user);

    axios.post('http://54.236.22.199:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      FirstName: '',
      LastName: '',
      Email: '',
      City: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName}
                />
          </div>
          <div className="form-group"> 
          <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.LastName}
                onChange={this.onChangeLastName}
                />
          </div>
          <div className="form-group">
          <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
          <label>City: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.City}
                onChange={this.onChangeCity}
                />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}