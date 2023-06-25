import { useGetSeatsQuery } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../reducers/vansParamsSlice";
import SeatsTrainDesc from "../../components/SeatsSelectComponent/SeatsTrainDesc";
import SeatsTicketQty from "../../components/SeatsSelectComponent/SeatsTicketQty";
import Error from "../../components/Error/Error";
import IsLoading from "../../components/IsLoading/IsLoading";
import VanType from "../../components/SeatsSelectComponent/VanType";
import Vans from "../../components/SeatsSelectComponent/Vans";
import { NavLink } from "react-router-dom";
import "./seatsSelect.css";

export default function SeatsSelect() {
    const dispatch = useDispatch()
    const typeVan = useSelector(state => state.vansParamsSlice.typeVan)
    const args = useSelector((state) => state.seatsParamsSlice);

    const {
        currentData: result,
        isError,
        isFetching,
    } = useGetSeatsQuery(args.req);
    if (isError) {
        return <Error />;
    }
    if (isFetching) {
        return <IsLoading />;
    }

    if (result) {
        dispatch(setResult(result))
        return (
            <section className="seats-content">
                <h1 className="seats-title">Выбор мест</h1>
                <div className="seats-select_departure">
                    <div className="seats-select_departure_header">
                        <span className="seats_departure-vector"></span>
                        <button className="change-other-train_button">
                            Выбрать другой поезд
                        </button>
                    </div>
                    <SeatsTrainDesc item={args.data.item} />
                    <SeatsTicketQty data={result} />
                    <section>
                        <VanType />
                        {typeVan !== "" ? <Vans /> : null}

                    </section>
                </div>
                <NavLink to={'/passengers/'} style={{ textDecoration: "none" }}>
                    <button className="next-button">Далее</button>
                </NavLink>
            </section>
        );
    }
}