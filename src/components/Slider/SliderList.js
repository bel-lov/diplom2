import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "../Slider/Slider";

export default function SliderList() {
    const { slideNumber, items } = useContext(SliderContext);

    const drowTwoItems = (items) => {
        return items.map((slide) => {
            if (slide.length > 1) {
                return (
                    <div className="slide" key={slide[0].id}>
                        <Slide key={slide[0].id} data={slide[0]} />
                        <Slide key={slide[1].id} data={slide[1]} />
                    </div>
                );
            } else {
                return (
                    <div className="slide" key={slide[0].id}>
                        <Slide key={slide[0].id} data={slide[0]} />
                    </div>
                );
            }
        });
    };
    const list = drowTwoItems(items);
    return (

        <div
            className="slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {list}
        </div>

    );
}