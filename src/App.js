import React, { Component } from 'react';
import styled from 'styled-components';
//open slot images
import Bar from '../src/images/Bar.png';
import BarTwo from '../src/images/Bar-two.png';
import BarThree from '../src/images/Bar-three.png';
import BarFour from '../src/images/Bar-four.png';
import BarFive from '../src/images/Bar-five.png';
import BarSix from '../src/images/Bar-six.png';
import BarSeven from '../src/images/Bar-seven.png';
import BarEight from '../src/images/Bar-eight.png';
//closed slot images
import RedBar from '../src/images/Red-bar.png';
import RedBarTwo from '../src/images/Red-Bar-two.png';
import RedBarThree from '../src/images/Red-Bar-three.png';
import RedBarFour from '../src/images/Red-Bar-four.png';
import RedBarFive from '../src/images/Red-Bar-six.png';
import RedBarSix from '../src/images/Red-Bar-six.png';
import RedBarSeven from '../src/images/Red-Bar-seven.png';
import RedBarEight from '../src/images/Red-Bar-eight.png';
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
  constructor(props){
    super(props);

    this.state = {
      slotOne: {
        name : "",
        number : 0
      },
      slotTwo: {
        name: "",
        number : 0,
      },
      slotThree: {
        name: "",
        number: 0
      },
      slotFour: {
        name: "",
        number: 0
      },
      slotFive: {
        name: "",
        number: 0
      },
      slotSix: {
        name: "",
        number: 0
      },
      slotSeven: {
        name: "",
        number: 0
      },
      slotEight: {
        name: "",
        number: 0
      }
    }
  }
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
       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={function(){ alert('clicked');}}><img src={Bar}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarTwo}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarThree}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarFour}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarFive}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarSix}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarSeven}></img></button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><img src={BarEight}></img></button>
      </Slots>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{this.state.slotOne.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <h3>Name:</h3>
          <br></br>
          <input type="text" name="name"></input>
          <br></br>
          <h3>Phone Number:</h3>
          <br></br>
          <input type="text" name="number"></input>
          <br></br>
  
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={function(){ alert('clicked');}}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      
      </div>
    );
  }
}

export default App;
