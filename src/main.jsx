import React, { useRef, useState } from "react";

export default function MainBoard() {
  const tableBody = useRef();
  const [inputPegIndex, setInputPegIndex] = useState([8, 8, 5, 4]);
  const [hints, setHints] = useState(["-", "-", "+", "-"]);
  const [rowIndex, setRowIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  let arrayColor = ["Red", "Yellow", "Green", "Blue", "Magenta", "Black"];
  let ArrayColorValue = [0, 1, 2, 3, 4, 5];

  const colorValueMap = {
    Red: 0,
    Yellow: 1,
    Green: 2,
    Blue: 3,
    Magenta: 4,
    Black: 5,
  };

  function handleInputPeg(event) {
    event.target.style.backgroundColor = arrayColor[colorIndex];
    console.log("index value of peg");
    console.log(colorValueMap[arrayColor[colorIndex]], "colorValueMap");
    let copyinputPegIndex = [...inputPegIndex];
    copyinputPegIndex[event.target.getAttribute("pegindex")] =
      colorValueMap[arrayColor[colorIndex]];
    setInputPegIndex(copyinputPegIndex);
    setColorIndex(colorIndex + 1);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="boardContainer">
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
                    <div
                      className={`hintsPegs${i}`}
                      style={{ float: "left", width: "50%", height: "50%" }}
                    >
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
    </div>
  );
}
