import React, { useState } from "react";

import classes from "./CalculatorLayout.module.css";
import Button from "./Button";
import Result from "./Result";

const CalculatorLayout = () => {
  const [total, setTotal] = useState();

  function clickHandler(eve) {
    setTotal(total.concat(eve.target.id));
  }

  function clearHandler() {
    setTotal("");
  }

  function finishCalculate() {
    setTotal(eval(total).toString());
  }

  return (
    <section className={classes.wrapper}>
      <div>
        <Result>{total}</Result>
      </div>
      <div className={classes.btns}>
        <div className={classes.control}>
          <Button onClick={clearHandler}>AC</Button>
          <Button onClick={clickHandler} id="/">
            /
          </Button>
          <Button onClick={clickHandler} id="*">
            *
          </Button>
        </div>

        <div className={classes.control}>
          <Button onClick={clickHandler} id="7">
            7
          </Button>
          <Button onClick={clickHandler} id="8">
            8
          </Button>
          <Button onClick={clickHandler} id="9">
            9
          </Button>
          <Button onClick={clickHandler} id="+">
            +
          </Button>
        </div>

        <div className={classes.control}>
          <Button onClick={clickHandler} id="4">
            4
          </Button>
          <Button onClick={clickHandler} id="5">
            5
          </Button>
          <Button onClick={clickHandler} id="6">
            6
          </Button>
          <Button onClick={clickHandler} id="-">
            -
          </Button>
        </div>

        <div className={classes.control}>
          <Button onClick={clickHandler} id="1">
            1
          </Button>
          <Button onClick={clickHandler} id="2">
            2
          </Button>
          <Button onClick={clickHandler} id="3">
            3
          </Button>
          <Button onClick={finishCalculate}>=</Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorLayout;
