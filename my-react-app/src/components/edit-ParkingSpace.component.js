import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditParkingSpace extends Component {
  constructor(data) {
    super(data);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSize= this.onChangeSize.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: '',
      description: '',
      size: '',
      price: 0,
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ParkingSpace/'+this.data.match.params.id)
      .then(response => {
        this.setState({
          FirstName: response.data.FirstName,
          description: response.data.description,
          size: response.data.size,
          price: response.data.price,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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

  onChangeSize(e) {
    this.setState({
      size: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
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
      size: this.state.size,
      price: this.state.price,
      date: this.state.date
    }

    console.log(ParkingSpace);

    axios.post('http://localhost:5000/ParkingSpace/update/' + this.data.match.params.id, ParkingSpace)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit ParkingSpace Log</h3>
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
          <label>Size: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.size}
              onChange={this.onChangeSize}
              />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
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
          <input type="submit" value="Edit Parking Space Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}