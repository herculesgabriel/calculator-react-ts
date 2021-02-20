import { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Buttons from "./components/Buttons";

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

  return (
    <div className="content">
      <Display currentMath={currentMath} historyList={historyList} />

      <Buttons
        handleNumberClick={handleNumberClick}
        handleClearButton={handleClearButton}
        handleOperationClick={handleOperationClick}
        handleResultClick={handleResultClick}
      />
    </div>
  );
}

export default App;
