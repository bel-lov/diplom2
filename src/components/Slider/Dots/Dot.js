import React, { useContext } from "react";
import { SliderContext } from "../../Slider/Slider";


export default function Dot({ number }) {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        <div
            className={`dot ${slideNumber === number ? "selected" : ""}`}
            onClick={() => goToSlide(number)}
        />
    );
}