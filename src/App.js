import React, { Component } from 'react';
import styled from 'styled-components';
import Bar from '../src/images/Bar.png';
import BarTwo from '../src/images/Bar-two.png';
import BarThree from '../src/images/Bar-three.png';
import BarFour from '../src/images/Bar-four.png';
import BarFive from '../src/images/Bar-five.png';
import BarSix from '../src/images/Bar-six.png';
import BarSeven from '../src/images/Bar-seven.png';
import BarEight from '../src/images/Bar-eight.png';
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
padding: 100px 0px 0px 0px;
color: rgb(10,186,181);
text-decoration: underline;
`

const Slots = styled.div`
text-align: center;
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
      <Slots>
        <img src={Bar}></img>
        <img src={BarTwo}></img>
        <img src={BarThree}></img>
        <img src={BarFour}></img>
        <img src={BarFive}></img>
        <img src={BarSix}></img>
        <img src={BarSeven}></img>
        <img src={BarEight}></img>
      </Slots>
      </div>
    );
  }
}

export default App;
