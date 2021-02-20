interface Props {
  number: number;
  handleNumberClick: Function;
}

const NumberButton: React.FC<Props> = ({ number, handleNumberClick }) => (
  <button type="button">
    {number}
  </button>
);

export default NumberButton;
