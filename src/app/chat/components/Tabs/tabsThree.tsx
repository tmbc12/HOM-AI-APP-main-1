import React, { Fragment } from "react";
import Range from "./range";
import styles from "./Tabs.module.css";

const TabThree = () => {
  return (
    <Fragment>
      <h3 className="" style={{ color: "white", marginTop: "50px" }}>Consistency with text</h3>
      <Range
        min={0}
        max={24}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </Fragment>
  );
};
export default TabThree;
