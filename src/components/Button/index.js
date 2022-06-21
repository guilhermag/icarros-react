import React from "react";
import { ButtonContent } from "./style";

const Button = ({ label, action, type, isDisable }) => {
  const propType = type ? type : 'success';
  return (
    <ButtonContent>
      <button onClick={action} className={propType} disable={isDisable}>
        {!isDisable ? label : "desabilitado"}
      </button>
    </ButtonContent>
  );
};

export default Button;
