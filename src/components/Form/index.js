import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props}/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      onClick={props.onClick}
      id={props.id}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success">
      {props.text}  
    </button>
  );
}
