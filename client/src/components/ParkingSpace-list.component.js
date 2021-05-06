import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ParkingSpace = data => (
  <tr>
    <td>{data.ParkingSpace.FirstName}</td>
    <td>{data.ParkingSpace.description}</td>
    <td>{data.ParkingSpace.size}</td>
    <td>{data.ParkingSpace.price}</td>
    <td>{data.ParkingSpace.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+data.ParkingSpace._id}>edit</Link> | <a href="#" onClick={() => { data.deleteParkingSpace(data.ParkingSpace._id) }}>delete</a>
    </td>
  </tr>
)

export default class ParkingSpacesList extends Component {
  constructor(data) {
    super(data);

    this.deleteParkingSpace = this.deleteParkingSpace.bind(this)

    this.state = {ParkingSpaces: []};
  }

  componentDidMount() {
    axios.get('http://54.236.22.199:5000/ParkingSpace')
      .then(response => {
        this.setState({ ParkingSpaces: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteParkingSpace(id) {
    axios.delete('http://54.236.22.199:5000/ParkingSpace'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      ParkingSpaces: this.state.ParkingSpaces.filter(el => el._id !== id)
    })
  }

  ParkingSpaceList() {
    return this.state.ParkingSpaces.map(currentParkingSpace => {
      return <ParkingSpace ParkingSpace={currentParkingSpace} deleteParkingSpace={this.deleteParkingSpace} key={currentParkingSpace._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Parking Spaces</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Description</th>
              <th>Size</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.ParkingSpaceList() }
          </tbody>
        </table>
      </div>
    )
  }
}