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
                        <button ><ArrowLeft size={28} /></button>
                        <button ><ArrowRight size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Tilt</h3>
                    <div className={styles.tab2row}>
                        <button><ArrowUp size={28} /></button>
                        <button><ArrowDown size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Rotate</h3>
                    <div className={styles.tab2row}>
                        <button><RotateCcw size={28} /></button>
                        <button><RotateCw size={28} /></button>
                    </div>
                </div>
                <div className={styles.tab2}>
                    <h3 style={{ color: "white" }}>Zoom</h3>
                    <div className={styles.tab2row}>
                        <button><ZoomIn size={28} /></button>
                        <button><ZoomOut size={28} /></button>
                    </div>
                </div>
            </div>

            <h3 className="" style={{ color: "white", marginTop: "30px" }}>Strength of motion</h3>
            <Range
                min={0}
                max={4}
                onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                }
            />
        </Fragment>
    );
};
export default TabTwo;
