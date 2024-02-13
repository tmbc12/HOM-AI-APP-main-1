import React, { Fragment } from "react";
import Range from "./range";
// import styles from "./Tabs.module.css";

const TabThree = () => {
  return (
    <Fragment>
      <h3 className="" style={{ color: "white", marginTop: "50px" }}>Consistency with text</h3>
      <Range
        max={24}
        min={0}
        onChange={({ min, max }: { max: number; min: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </Fragment>
  );
};
export default TabThree;
