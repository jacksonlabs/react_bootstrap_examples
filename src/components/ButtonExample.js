import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ButtonExample extends Component {

    state = {
      counter: 0,
    }
      
    handleClick = event => {
      this.setState({counter: this.state.counter + 1});
    }

    render() {
      return (
        <div>
          <p>Count: {this.state.counter}</p>
          <Button onClick={() => this.handleClick()}>Click Me!</Button>
        </div>
      );
    }
  
  }
  
  export default ButtonExample;