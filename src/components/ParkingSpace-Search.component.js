import React, { Component } from 'react';
import axios from 'axios';


export default class ParkingSpaceSearch extends Component {
  constructor(data) {
    super(data);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
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

    console.log(ParkingSpace.price);

    axios.get('http://54.236.22.199:5000/ParkingSpace/search/' + ParkingSpace.price)
      .then(res => console.log(res.data));
    
  }
  
  render() {
    return (
      <div>
      <h3>Search by Price</h3>
      <form onSubmit={this.onSubmit}>
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
          <input type="submit" value="Create Parking Space" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
