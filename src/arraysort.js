/* import React, { useState } from "react";

function Arraysort() {
  const [arr, setArr] = useState(['apple', 'banana', 'mango', 'grapes','pineapple']);
  const [fruitname, setFruitname] = useState('');
  const [filteredArr, setFilteredArr] = useState([]);
  const filterFruits = () => {
    const output = arr.filter((ele) => ele === fruitname);

    if (output.length === 0) {
      setFilteredArr(['Element is not found']);
    } else {
      setFilteredArr(output);
    }
  };

  return (
    <div>
      <h1>Arraysort Based on the Fruits</h1>
      <input type="text" onChange={(e) => setFruitname(e.target.value)} />
      <button onClick={filterFruits}>Find</button>
      <ul>
        {filteredArr.map((ele, index) => {
          return (<li key={index}>{ele}</li>);
        })}
      </ul>
    </div>
  );
}

export default Arraysort;
 */