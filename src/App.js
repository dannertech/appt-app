import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledHeader = styled.div`
text-align: center;
background-color: rgb(10,186,181);
border: 1px solid;
padding: 10px;
box-shadow: 5px 10px #E8E8E8;
color: white;
`

const StyledSubheader = styled.div`
text-align: center;
padding: 20px 0px 0px 0px;
color: rgb(10,186,181);
text-decoration: underline;
`

class App extends Component {
  render() {
    return (
      <div>
      <StyledHeader>
        <h1>Appt App</h1>
      </StyledHeader>
      <StyledSubheader>
<h3>Schedule Your Appointment</h3>
      </StyledSubheader>
      </div>
    );
  }
}

export default App;
