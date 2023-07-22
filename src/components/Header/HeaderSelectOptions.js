import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import BreadCrums from "./BreadCrums/BreadCrums";
import Datalist from "./Datalist";
import { setParams } from "../../reducers/routesParamsSlice";
import "./header.css";

import fromToGeo from "../../img/icons/from-to-geo.svg";
import rotate from "./../../img/icons/rotate.svg";
import calendar from "./../../img/icons/calendar.svg";
import { useDispatch } from "react-redux";


export default function HeaderSelectOptions() {
    const dispatch = useDispatch();
    const [valueFrom, setValueFrom] = useState("");
    const [valueTo, setValueTo] = useState("");

    const [from_city_id, setFrom_city_id] = useState("");
    const [to_city_id, setTo_city_id] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateBack, setDateBack] = useState("");


    const handleChangeFrom = (evt) => {
        setValueFrom(evt.target.value);
    };


    const handleChangeTo = (evt) => {
        setValueTo(evt.target.value);
    };

    const handledDateTo = (evt) => {
        setDateTo(evt.target.value);
    };

    const handledDateBack = (evt) => {
        setDateBack(evt.target.value);
    };

    const setIdFrom = (id) => {
        setFrom_city_id(id);
    };

    const setIdTo = (id) => {
        setTo_city_id(id);
    };

    const setParamsinStore = (evt) => {
        evt.preventDefault();
        const request = {
            from_city_id: from_city_id,
            to_city_id: to_city_id,
            date_start: dateTo,
            date_end: dateBack,
        };
        dispatch(setParams(request));
    };

    return (
        <header className="header-trainselect">
            <div className="header-trainselect-image">
                <Navbar />
                <div className="trainSelect_header-content">
                    <div className="trainSelect_header-content_search-form-container">
                        <form className="trainSelect_header-content_search-form">
                            <div className="trainSelect__header-form__direction">
                                <h2 className="ticket-form__head">Направление</h2>
                                <div className="trainSelect__header-form__items">
                                    <div className="train-select__header-form__item">
                                        <input
                                            type="text"
                                            className="ticket-form__input from_search"
                                            placeholder="Откуда"
                                            list="cities"
                                            name="cities"
                                            autoсomplete="off"
                                            value={valueFrom}
                                            onChange={handleChangeFrom}
                                            required
                                        />
                                        <datalist id="cities">
                                            {<Datalist arg={valueFrom} onClick={setIdFrom} />}
                                        </datalist>
                                        <img
                                            className="header-form__icon"
                                            src={fromToGeo}
                                            alt="geolocation"
                                        />
                                    </div>
                                    <div className="rotate">
                                        <img src={rotate} alt="rotate" />
                                        {/* {<Datalist arg={(valueFrom, valueTo)} onClick={rotateItems} />} */}

                                    </div>
                                    <div className="train-select__header-form__item">
                                        <input
                                            className="ticket-form__input where_search right"
                                            placeholder="Куда"
                                            list="citiesTo"
                                            name="citiesTo"
                                            autoсomplete="off"
                                            value={valueTo}
                                            onChange={handleChangeTo}
                                            required
                                        />
                                        <datalist id="citiesTo">
                                            {<Datalist arg={valueTo} onClick={setIdTo} />}
                                        </datalist>
                                        <img
                                            className="header-form__icon"
                                            src={fromToGeo}
                                            alt="geolocation"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="trainSelect__header-form__date">
                                <h2 className="ticket-form__head">Дата</h2>
                                <div className="header-form__items">
                                    <div className="train-select__header-form__item">
                                        <div className="datepicker">
                                            <input
                                                type="date"
                                                className="ticket-form__input departure-date"
                                                placeholder="ДД/ММ/ГГ"
                                                onChange={handledDateTo}
                                            //required
                                            />
                                            <div
                                                className="datepicker__wrapper"
                                                style={{
                                                    zIndex: 9999,
                                                    position: "absolute",
                                                    display: "none",
                                                }}
                                            ></div>
                                        </div>
                                        <img
                                            className="header-form__icon"
                                            src={calendar}
                                            alt="calendar"
                                        />
                                    </div>
                                    <div className="rotate"></div>
                                    <div className="train-select__header-form__item">
                                        <div className="datepicker">
                                            <input
                                                type="date"
                                                className="ticket-form__input departure-date-back right"
                                                placeholder="ДД/ММ/ГГ"
                                                onChange={handledDateBack}
                                            //required
                                            />
                                            <div
                                                className="datepicker__wrapper"
                                                style={{
                                                    zIndex: 9999,
                                                    position: "absolute",
                                                    display: "none",
                                                }}
                                            ></div>
                                        </div>
                                        <img
                                            className="header-form__icon"
                                            src={calendar}
                                            alt="calendar"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="header-form__submit">
                                <div className="train-select__header-form__item">
                                    <button
                                        className="find-tickets right"
                                        onClick={setParamsinStore}
                                    >
                                        Найти билеты
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BreadCrums />
        </header>
    );
}