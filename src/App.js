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
        'Rent' : false,
        'Garbage' : false
      }
    ]
    
  }


}