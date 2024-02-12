import React, { FC, Fragment } from "react";
import { RectangleHorizontal } from 'lucide-react';
import Range from "./range";
import styles from "./Tabs.module.css";
const TabOne: FC<{}> = () => {
    return (
        <Fragment>
            <h3 className="" style={{ color: "white" }}>Aspect Ratio</h3>
            <div className={styles.aspect}>
                <div className={styles.aspect1}>
                    <button ><RectangleHorizontal size={38} />16:9</button>
                    <button ><RectangleHorizontal size={38} />1:1</button>
                    <button ><RectangleHorizontal size={38} />8:9</button>
                </div>
                <div className={styles.aspect1}>
                    <button ><RectangleHorizontal size={38} />10:0</button>
                    <button ><RectangleHorizontal size={38} />11:3</button>
                    <button ><RectangleHorizontal size={38} />8:6</button>
                </div>
            </div>
                <h3 className="" style={{ color: "white", marginTop: "30px" }}>Frames per second</h3>
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
export default TabOne;