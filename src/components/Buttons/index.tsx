import { useState } from "react";

import Button from "../Button";

interface Props {
  number: number;
  handleNumberClick: Function;
}

const Buttons: React.FC<Props> = ({ number, handleNumberClick }) => {
  // const [] = useState();

  return (
    <div>
      <Button number={7} handleNumberClick={handleNumberClick} />
      <Button number={7} handleNumberClick={handleNumberClick} />
    </div>
  );
};

export default Buttons;
