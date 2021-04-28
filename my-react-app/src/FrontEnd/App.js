import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ParkingSpacesList from "./components/ParkingSpace-list.component";
import EditParkingSpace from "./components/edit-ParkingSpace.component";
import CreateParkingSpace from "./components/create-ParkingSpace.component";
import CreateUser from "./components/create-user.component";
import SearchBar from "./components/ParkingSpace-Search.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ParkingSpacesList} />
      <Route path="/edit/:id" component={EditParkingSpace} />
      <Route path="/create" component={CreateParkingSpace} />
      <Route path="/user" component={CreateUser} />
      <Route path="/search" component={SearchBar} />
      </div>
    </Router>
  );
}

export default App;
