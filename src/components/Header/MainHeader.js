import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setParams } from "../../reducers/routesParamsSlice";
import { resetVans } from "../../reducers/vansParamsSlice";
import { resetRoutes } from "../../reducers/routesParamsSlice";
import { resetSeats } from "../../reducers/seatsParamsSlice";
import Navbar from "./Navbar";
import Datalist from "./Datalist";
import "./header.css";

import rotate from "../../img/icons/rotate.svg";
import fromToGeo from "../../img/icons/from-to-geo.svg";
import calendar from "../../img/icons/calendar.svg";

export default function MainHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(resetVans());
        dispatch(resetRoutes());
        dispatch(resetSeats());
        const request = {
            from_city_id: from_city_id,
            to_city_id: to_city_id,
            date_start: dateTo,
            date_end: dateBack,
        };
        dispatch(setParams(request));

        navigate("/trainselect");
    };

    return (
        <header className="header">
            <Navbar />

            <div className="header-container container">
                <div className="header__slogan">
                    <h1>
                        Вся жизнь - <b>путешествие!</b>
                    </h1>
                </div>

                <div className="ticket">
                    <form className="ticket-form">
                        <div className="header-form__direction">
                            <h2 className="ticket-form__head">Направление</h2>
                            <div className="header-form__items">
                                <div className="header-form__item">
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
                                </div>
                                <div className="header-form__item">
                                    <input
                                        type="text"
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
                        <div className="header-form__date">
                            <h2 className="ticket-form__head">Дата</h2>
                            <div className="header-form__items">
                                <div className="header-form__item">
                                    <div className="datepicker">
                                        <input
                                            type="date"
                                            className="ticket-form__input departure-date"
                                            placeholder="ДД/ММ/ГГ"
                                            onChange={handledDateTo}
                                        // required
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
                                <div className="header-form__item">
                                    <div className="datepicker">
                                        <input
                                            type="date"
                                            className="ticket-form__input departure-date-back right"
                                            placeholder="ДД/ММ/ГГ"
                                            onChange={handledDateBack}
                                        // required
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
                            <div className="header-form__item">
                                {/* <NavLink to="/trainselect"> */}
                                <button
                                    className="find-tickets right"
                                    onClick={setParamsinStore}
                                >
                                    Найти билеты
                                </button>
                                {/* </NavLink> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}