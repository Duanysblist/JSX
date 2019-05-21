// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
  return 'Click Me!';
};
// class App extends React.Component
// It used to be that Javascript could not tell the difference
// between a class declaration and a class attribute in JSX
// But now it does, so the rules of only using className is
// a little bit more relaxed
// This can be seen with htmlFor and for
// Early days of React thought it would be a for loop
// But not anymore (it just gives you an error in console but it runs)

// You can use curly braces to input a variable into your JSX
// In this example we create a variable called 'buttonText'
// Then use it as the text that appears on the button
// Or get more complicated and use a function like we did above
// But you cannot display an object as text
// But you can take a property of that object and display it
// in the syntax of Object.property

// Create a react component
const App = () => {
  // const buttonText = 'Click Me!';

  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:{' '}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// When styling, make user to use double brackets for the key value pairs
// First set of brackets to denote use of a javascript variable
// Second set to denote a javascript object
// Separate key value pairs with a comma

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

// THREE TENETS OF COMPONENTS

// COMPONENT NESTING
// We nest different components within each other when
// creating a larger React application.

// COMPONENT REUSABILITY
// We want to make components that can be easily reused throughout
// the application

// COMPONENT CONFIGURATION
// We should be able to configure a component when it is created
