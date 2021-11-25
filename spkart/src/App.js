import './App.css';
import * as React from 'react';
import { About } from './About';
import { Nav } from './Nav';

function App() {
  return (
    <div className="App">
      <navigator>
        <Nav />
      </navigator>
      <About />
    </div>
  );
}

function Products(){
  return(
    <div className="productList">
      
    </div>
  )
}
export default App;
