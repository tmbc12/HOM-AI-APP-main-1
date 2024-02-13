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
    max: number;
    min: number;
    onChange: (values: {  max: number; min: number }) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
    min,
    max,
    onChange
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal,] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);


    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); 

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    
    useEffect(() => {
        onChange({ max: maxVal, min: minVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={styles.container}>
            <div className={styles.slider__left}>{minVal}</div>
            <input
                className={styles.slider__input}
                max={max}
                min={min}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                ref={minValRef}
                type="range"
                value={minVal}
            
            />


            <div className={styles.slider}>
                <div className={styles.slider__track}></div>
                <div className={styles.slider__range} ref={range} ></div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
