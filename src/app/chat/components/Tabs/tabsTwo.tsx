import React, {  Fragment } from "react";
import styles from "./Tabs.module.css";
import Range from "./range";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, RotateCw, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

const TabTwo = () => {
    return (
        <Fragment>
            <h3 className="" style={{ color: "white" }}>Camera control</h3>
            <div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Pan</h3>
                    <div className={styles.tab2row}>
                        <button type="button"><ArrowLeft size={28} /></button>
                        <button type="button"><ArrowRight size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Tilt</h3>
                    <div className={styles.tab2row}>
                        <button type="button"><ArrowUp size={28} /></button>
                        <button type="button"><ArrowDown size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Rotate</h3>
                    <div className={styles.tab2row}>
                        <button type="button"><RotateCcw size={28} /></button>
                        <button type="button"><RotateCw size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Zoom</h3>
                    <div className={styles.tab2row}>
                        <button type="button"><ZoomIn size={28} /></button>
                        <button type="button"><ZoomOut size={28} /></button>
                    </div>
                </div>
            </div>

            <h3 className="" style={{ color: "white", marginTop: "30px" }}>Strength of motion</h3>
            <Range
                max={4}
                min={0}
                onChange={({ min, max }: { max: number; min: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                }
            />
        </Fragment>
    );
};
export default TabTwo;
