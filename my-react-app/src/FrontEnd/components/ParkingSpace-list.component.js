import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ParkingSpace = props => (
  <tr>
    <td>{props.ParkingSpace.FirstName}</td>
    <td>{props.ParkingSpace.description}</td>
    <td>{props.ParkingSpace.size}</td>
    <td>{props.ParkingSpace.price}</td>
    <td>{props.ParkingSpace.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.ParkingSpace._id}>edit</Link> | <a href="#" onClick={() => { props.deleteParkingSpace(props.ParkingSpace._id) }}>delete</a>
    </td>
  </tr>
)

export default class ParkingSpacesList extends Component {
  constructor(props) {
    super(props);

    this.deleteParkingSpace = this.deleteParkingSpace.bind(this)

    this.state = {ParkingSpaces: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ParkingSpace')
      .then(response => {
        this.setState({ ParkingSpaces: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteParkingSpace(id) {
    axios.delete('http://localhost:5000/ParkingSpace'+id)
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