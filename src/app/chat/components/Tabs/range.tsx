import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
    useRef
} from "react";
import styles from "./Tabs.module.css";


interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: Function;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
    min,
    max,
    onChange
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={styles.container}>
            <div className={styles.slider__left}>{minVal}</div>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={styles.slider__input}
            />


            <div className={styles.slider}>
                <div className={styles.slider__track}></div>
                <div ref={range} className={styles.slider__range}></div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
