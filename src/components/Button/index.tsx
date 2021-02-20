interface Props {
  handleClick: any;
  className?: string;
}

const NumberButton: React.FC<Props> = ({ handleClick, children, className = "" }) => (
  <button
    type="button"
    className={className}
    onClick={handleClick}
    value={children as string}
  >
    {children}
  </button>
);

export default NumberButton;
