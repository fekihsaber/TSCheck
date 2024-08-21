// Counter.tsx
import React, { Component } from 'react';

// Define an interface for the state of the Counter component
interface CounterState {
  count: number;  // Current count value, expected to be a number
}

// Use the interface for the component’s state
class Counter extends Component<{}, CounterState> {
  // Initialize the state with a count of 0
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });  // Update the state with the incremented count
  };

  // Render the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>  {/* Display the current count */}
        <button onClick={this.increment}>Increment</button>  {/* Button to increment the count */}
      </div>
    );
  }
}

export default Counter;
