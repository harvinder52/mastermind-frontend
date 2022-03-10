import "./App.css";
import "./animation.css";
import axios from "axios";

import { useState, useEffect, useRef } from "react";

function App() {
  const [inputPegIndex, setInputPegIndex] = useState([9, 9, 9, 9]);
  const baseURL = "http://localhost:8080/submit";
  const postURL = "http://localhost:8080/verifyGuess";
  const tableBody = useRef();

  const onButtonCheckGuess = () => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });

    axios.post(postURL, inputPegIndex).then((response) => {
      console.log(response.data);
    });

    setRowIndex(rowIndex + 1);
  };
  const [rowIndex, setRowIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  let arrayColor = ["Red", "Yellow", "Green", "Blue", "Magenta", "Black"];
  let ArrayColorValue = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    if (rowIndex <= 9) {
      console.log(
        "rowIndex altered",
        tableBody.current.children[rowIndex].children
      );
      for(let i = 0; i<=9; i++){
         for (const peg of tableBody.current.children[rowIndex].children) {
        peg.style['pointer-events'] = 'auto';
        }

        if(i!=rowIndex){
          for (const peg of tableBody.current.children[i].children) {
        peg.style['pointer-events'] = 'none';
        }
        
      }
      }
      
    }
  }, [rowIndex]);

  const colorValueMap = {
    Red: 0,
    Yellow: 1,
    Green: 2,
    Blue: 3,
    Magenta: 4,
    Black: 5,
  };

  function handleColorPeg(event) {
    document.querySelector("#row1").style.backgroundColor =
      event.target.getAttribute("value");
    console.log("handleColorPeg ran", event.target.getAttribute("value"));
  }
  function handleInputPeg(event) {
    console.log("handleInputPeg ran", event.target.getAttribute("pegindex"));

    event.target.style.backgroundColor = arrayColor[colorIndex];
    console.log("index value of peg");
    console.log(colorValueMap[arrayColor[colorIndex]], "colorValueMap");
    let copyinputPegIndex = [...inputPegIndex];
    copyinputPegIndex[event.target.getAttribute("pegindex")] =
      colorValueMap[arrayColor[colorIndex]];
    setInputPegIndex(copyinputPegIndex);
    setColorIndex(colorIndex + 1);
  }
  useEffect(() => {
    console.log(inputPegIndex, "inputPegIndex changed");
  }, [inputPegIndex]);
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
        {("GUESS:", rowIndex)}
        <table>
          <tbody ref={tableBody}>
            {[...Array(10)].map((_, i) => (
              <>
                <tr id={"row" + i} key={"key" + i}>
                  <td
                    onClick={handleInputPeg}
                    pegindex="0"
                    className="colorPeg"
                  ></td>
                  <td
                    onClick={handleInputPeg}
                    pegindex="1"
                    className="colorPeg"
                  ></td>
                  <td
                    onClick={handleInputPeg}
                    pegindex="2"
                    className="colorPeg"
                  ></td>
                  <td
                    onClick={handleInputPeg}
                    pegindex="3"
                    className="colorPeg"
                  ></td>
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
          </tbody>
        </table>
      </div>

      <div className="playerInputContainer">
        <div>
          <ul className="colorList">
            {arrayColor.map((color, i) => (
              <li key={i}>
                <span
                  onClick={handleColorPeg}
                  value={color}
                  className={`colorPeg ColorPeg${color}`}
                ></span>
              </li>
            ))}
            <li>
              <button className="checkButton" onClick={onButtonCheckGuess} disabled={true}>
                Check
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
