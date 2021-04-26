import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateParkingSpace extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: '',
      description: '',
      duration: 0,
      date: new Date(),
    }
  }

  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const ParkingSpace = {
      FirstName: this.state.FirstName,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(ParkingSpace);

    axios.post('http://localhost:5000/ParkingSpace/add', ParkingSpace)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Parking Space Listing</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>FirstName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.FirstName}
              onChange={this.onChangeFirstName}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Parking Space" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}