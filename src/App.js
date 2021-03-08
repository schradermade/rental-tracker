import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  state = {
    isLoading : false,
    rentals: [
      {
        'id' : '1',
        'Address' : '12345 SW Main St, Tualatin, Oregon 97062',
        'Status' : false,
        'Rent' : false,
        'Garbage' : false
      }
    ]
  }

  remove(id) {
    let updatedRentals = [...this.state.rentals].filter (i => i.id !== id)
    this.setState({ rentals : updatedRentals });
  }

  redirect(id) {
    let rental = [...this.state.rentals].filter (i => i.id ===id);
    let url = rental[0].RentalTable;
    window.open(url);
  }

  unsettled(id) {
    let rental = this.state.rentals.filter (i => i.id ===id);
    rental[0].Status = false;
    let updatedRentals = [...this.state.rentals];
    this.setState({ rentals : updatedRentals });
  }

  settled(id) {
    let rental = this.state.rentals.filter (i => i.id ===id);
    rental[0].Status = true;
    let updatedRentals = [...this.state.rentals];
    this.setState({ rentals : updatedRentals });
  }

}