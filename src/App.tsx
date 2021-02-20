import "./App.css";

import { useState } from "react";

function App() {
  const [currentMath, setCurrentMath] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operation, setOperation] = useState("");
  const [historyList, setHistoryList] = useState<string[]>([]);

  const handleOperationClick = (event: any) => {
    const { value: operation } = event.target;

    if (firstValue) setCurrentMath((state) => `${state} ${operation} `);

    setOperation(operation);
  };

  const handleResultClick = () => {
    let result: number;

    if (!secondValue) return;

    switch (operation) {
      case "+":
        result = +firstValue + +secondValue;
        break;
      case "-":
        result = +firstValue - +secondValue;
        break;
      case "/":
        result = +firstValue / +secondValue;
        break;
      case "x":
        result = +firstValue * +secondValue;
        break;
      case "%":
        result = +firstValue % +secondValue;
        break;
      default:
        result = 0;
    }

    setHistoryList((state) => [...state, `${currentMath} = ${result}`]);
    setOperation("");
    setSecondValue("");
    setFirstValue(`${result}`);
    setCurrentMath(`${result}`);
  };

  const handleClearButton = () => {
    setOperation("");
    setFirstValue("");
    setSecondValue("");
    setCurrentMath("");
  };

  const handleNumberClick = (event: any) => {
    const { value }: { value: string } = event.target;

    if (!operation) {
      return setFirstValue((firstValueState) => {
        setCurrentMath((currentMathState) => currentMathState + value);
        return firstValueState + value;
      });
    }

    setSecondValue((secondValueState) => {
      setCurrentMath((currentMathState) => currentMathState + value);
      return secondValueState + value;
    });
  };

  return (
    <div className="content">
      <main className="display">
        <h1>{currentMath}</h1>

        <ul className="history">
          {historyList.map((entry, i) => (
            <li key={i + entry}>{entry}</li>
          ))}
        </ul>
      </main>

      <div className="buttons">
        <div className="numeric-buttons">
          <button type="button" value="7" onClick={handleNumberClick}>
            7
          </button>
          <button type="button" value="8" onClick={handleNumberClick}>
            8
          </button>
          <button type="button" value="9" onClick={handleNumberClick}>
            9
          </button>
          <button type="button" value="4" onClick={handleNumberClick}>
            4
          </button>
          <button type="button" value="5" onClick={handleNumberClick}>
            5
          </button>
          <button type="button" value="6" onClick={handleNumberClick}>
            6
          </button>
          <button type="button" value="1" onClick={handleNumberClick}>
            1
          </button>
          <button type="button" value="2" onClick={handleNumberClick}>
            2
          </button>
          <button type="button" value="3" onClick={handleNumberClick}>
            3
          </button>
          <button type="button" value="0" onClick={handleNumberClick}>
            0
          </button>
          <button type="button" value="." onClick={handleNumberClick}>
            .
          </button>
          <button type="button" value="C" onClick={handleClearButton}>
            C
          </button>
        </div>

        <div className="operation-buttons">
          <div className="first-line">
            <button type="button" value="-" onClick={handleOperationClick}>
              -
            </button>
            <button type="button" value="/" onClick={handleOperationClick}>
              /
            </button>
          </div>

          <div className="second-line">
            <div className="second-line-first-column">
              <button type="button" value="+" onClick={handleOperationClick}>
                +
              </button>
            </div>
            <div className="second-line-second-column">
              <button type="button" value="x" onClick={handleOperationClick}>
                x
              </button>
              <button type="button" value="%" onClick={handleOperationClick}>
                %
              </button>
            </div>
          </div>

          <div className="third-line">
            <button
              className="result-button"
              type="button"
              value="="
              onClick={handleResultClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
