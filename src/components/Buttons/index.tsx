import Button from "../Button";
interface Props {
  handleNumberClick: any;
  handleClearButton: any;
  handleOperationClick: any;
  handleResultClick: any;
}

const Buttons: React.FC<Props> = ({
  handleNumberClick,
  handleClearButton,
  handleOperationClick,
  handleResultClick,
}) => (
  <div className="buttons">
    <div className="numeric-buttons">
      <Button handleClick={handleNumberClick}>7</Button>
      <Button handleClick={handleNumberClick}>8</Button>
      <Button handleClick={handleNumberClick}>9</Button>
      <Button handleClick={handleNumberClick}>4</Button>
      <Button handleClick={handleNumberClick}>5</Button>
      <Button handleClick={handleNumberClick}>6</Button>
      <Button handleClick={handleNumberClick}>1</Button>
      <Button handleClick={handleNumberClick}>2</Button>
      <Button handleClick={handleNumberClick}>3</Button>
      <Button handleClick={handleNumberClick}>0</Button>
      <Button handleClick={handleNumberClick}>.</Button>

      <Button handleClick={handleClearButton}>C</Button>
    </div>

    <div className="operation-buttons">
      <div className="first-line">
        <Button handleClick={handleOperationClick}>-</Button>
        <Button handleClick={handleOperationClick}>/</Button>
      </div>

      <div className="second-line">
        <div className="second-line-first-column">
          <Button handleClick={handleOperationClick}>+</Button>
        </div>
        <div className="second-line-second-column">
          <Button handleClick={handleOperationClick}>x</Button>
          <Button handleClick={handleOperationClick}>%</Button>
        </div>
      </div>

      <div className="third-line">
        <Button className="result-button" handleClick={handleResultClick}>=</Button>
      </div>
    </div>
  </div>
);

export default Buttons;
