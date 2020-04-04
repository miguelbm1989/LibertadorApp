import React from 'react';
import Navbar from './components/layout/Navbar'
import Joke from './components/Joke'
import Test from './components/pruebita/Test';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto">
        <Joke />
        <Test />
      </div>

    </div>
  );
}

export default App;
