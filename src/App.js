import React from 'react';
import PropTypes from "prop-types";

const foodILike = ["kimchi", "ramen", "sushi", "bibimbap"]

function Food({ fav }) {
  return <h1>I like {fav}</h1> 
}

Food.propTypes = {
  fav: PropTypes.string
}

function App() {
  return (
    <div className="App">
      {
        foodILike.map(food => (
          <Food key={ foodILike.indexOf(food) }fav={food}></Food>
        ))
      }
    </div>
  );
}

export default App;
