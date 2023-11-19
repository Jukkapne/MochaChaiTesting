import React from 'react';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Our App" />
      <Button text="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
