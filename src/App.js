import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledHeader = styled.div`
text-align: center;
`

class App extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>You are at the main page</h1>
      </StyledHeader>
    );
  }
}

export default App;
