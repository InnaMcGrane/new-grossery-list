import image from "./food.jpg";
import imageTwo from "./delivery.jpg";

import "./App.css";
import { Grosery } from "./Crosery";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} width="250px" alt="food" />
      </div>

      <div className="container">
        <h1> Grocery List</h1>
      </div>

      <Grosery />
      {/* New Component */}
     <div className="container">
        <img src={imageTwo} width="200px" alt="delivery" />
      </div>
    </div>
  );
}

export default App;
