
import './App.css';
import './animation.css'

function App() {
  return (
    <div className="App">
      <div className="header" >
        MASTERMIND
      </div>
      <div className="boardContainer" >
        <table>     <tr>
    <th>Guess</th>
   
  </tr>{[...Array(10)].map((_, i) => (
        <>
      
  <tr  id={"row"+i}>
    <td><span className="colorPeg "></span></td>
    <td><span className="colorPeg "></span></td>
    <td><span className="colorPeg "></span></td>
    <td><span className="colorPeg "></span></td>
    <div style={{ float: "left",
    width: "50%",
    height: "50%"}}><span className="hintPeg "></span><span className="hintPeg "></span><span className="hintPeg "></span><span className="hintPeg "></span></div>
  </tr>
 
          </>
          ))

      }
      </table>
      </div>
    
      <div className="playerInputContainer" >
      <div>
        <ul className="colorList">
          <li>
          <span className="colorPeg ColorPegRed"></span>
          </li>
          <li>
          <span className="colorPeg ColorPegYellow"></span>
          </li>
          <li>
          <span className="colorPeg ColorPegGreen"></span>
          </li>
          <li>
          <span className="colorPeg ColorPegBlue"></span>
          </li>
          <li>
          <span className="colorPeg ColorPegWhite"></span>
          </li>
          <li>
          <span className="colorPeg ColorPegBlack"></span>
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
