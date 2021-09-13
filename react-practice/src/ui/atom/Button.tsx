import React from "react";
import Button from "@material-ui/core/Button";

/**
 * ButtonComponent
 */

export interface ButtonWapperInterface {
  name: string;
  test: string;
  onClick: Function;
}

export const ButtonWapper = (props: ButtonWapperInterface) => {
  console.log("render Button");
  const click = () => {
    props.onClick();
  };

  return (
    <>
      <div className="buttonwapper">
        <Button variant="contained" color="primary" onClick={click}>
          {props.name}
        </Button>
      </div>
    </>
  );
};