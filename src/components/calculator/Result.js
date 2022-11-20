import React from "react";
import classes from "./Result.module.css";

const Result = (props) => {
  return <div className={classes.result}>{props.children}</div>;
};

export default Result;
