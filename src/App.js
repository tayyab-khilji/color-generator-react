import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            placeholder="#fffff"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>List Goes</h4>
      </section>
    </>
  );
}

export default App;
