import "./App.css";
import "./animation.css";

import { useState, useEffect } from "react";

function App() {
 
  const [inputPegIndex, setInputPegIndex] = useState([9, 9, 9, 9]);

  const [colorIndex, setColorIndex] = useState(0);
  let arrayColor = ["red", "yellow", "green", "blue", "magenta", "black"];
  let ArrayColorValue = [0,1,2,3,4,5];

  const colorValueMap ={
   'red': 0,
   'yellow': 1,
   'green': 2,
   'blue': 3,
   'magenta': 4,
   'black': 5,
}





  function handleColorPeg(event) {
    document.querySelector("#row1").style.backgroundColor =
      event.target.getAttribute("value");
    console.log("handleColorPeg ran", event.target.getAttribute("value"));
  }
  function handleInputPeg(event) {
    console.log("handleInputPeg ran", event);

    event.target.style.backgroundColor = arrayColor[colorIndex];
    console.log("index value of peg", );
    console.log(colorValueMap[arrayColor[colorIndex]], "colorValueMap");
    let copyinputPegIndex = [...inputPegIndex];
    copyinputPegIndex[event.target.getAttribute("PegIndex")] = colorValueMap[arrayColor[colorIndex]]
    setInputPegIndex(copyinputPegIndex)
    setColorIndex(colorIndex + 1);
  }
  useEffect(() => {

  console.log(inputPegIndex, "inputPegIndex changed")

  }, [inputPegIndex])
  useEffect(() => {
    if (colorIndex === 6) {
      setColorIndex(0);
      console.log(colorIndex, "equals to 6");
    }
    console.log(colorIndex, "useEffect");
  }, [colorIndex]);
  return (
    <div className="App">
      <div className="header">MASTERMIND</div>
      <div className="boardContainer">
        <table>
          {" "}
          <tr>
            <th>Guess</th>
          </tr>
          {[...Array(10)].map((_, i) => (
            <>
              <tr id={"row" + i}>
                <td onClick={handleInputPeg} PegIndex='0' className="colorPeg"></td>
                <td onClick={handleInputPeg} PegIndex='1' className="colorPeg"></td>
                <td onClick={handleInputPeg} PegIndex='2' className="colorPeg"></td>
                <td onClick={handleInputPeg} PegIndex='3' className="colorPeg"></td>
                <td>
                  <div style={{ float: "left", width: "50%", height: "50%" }}>
                    <span className="hintPeg "></span>
                    <span className="hintPeg "></span>
                    <span className="hintPeg "></span>
                    <span className="hintPeg "></span>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>

      <div className="playerInputContainer">
        <div>
          <ul className="colorList">
            <li>
              <span
                onClick={handleColorPeg}
                value="red"
                className="colorPeg ColorPegRed"
              ></span>
            </li>
            <li>
              <span
                onClick={handleColorPeg}
                value="yellow"
                className="colorPeg ColorPegYellow"
              ></span>
            </li>
            <li>
              <span
                onClick={handleColorPeg}
                value="green"
                className="colorPeg ColorPegGreen"
              ></span>
            </li>
            <li>
              <span
                onClick={handleColorPeg}
                value="blue"
                className="colorPeg ColorPegBlue"
              ></span>
            </li>
            <li>
              <span
                onClick={handleColorPeg}
                value="magenta"
                className="colorPeg ColorPegMagenta"
              ></span>
            </li>
            <li>
              <span
                onClick={handleColorPeg}
                value="black"
                className="colorPeg ColorPegBlack"
              ></span>
            </li>
            <li>
              <button className="checkButton">Check</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
