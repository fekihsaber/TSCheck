// Greeting.tsx
import React from 'react';

// Define an interface for the props of the Greeting component
interface GreetingProps {
  name: string;  // Name of the person to greet, expected to be a string
}

// Use the interface for props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;  // Render a greeting message with the provided name
};

export default Greeting;
