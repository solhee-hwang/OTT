import React from "react";
import ReactDOM from "react-dom";
import classes from "../Sytles/Modal.module.css";

const Background = (props) => {
  return <div className={classes.background} onClick={props.onClose} />;
};
const ModalWindow = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("modal-window");
const Modalnew = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Background onClose={props.onClose} />,
        portalElement
      )}
    </>
  );
};

export default Modalnew;
