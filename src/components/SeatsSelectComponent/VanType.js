import { setTypeVan, setFilterVansList } from "../../reducers/vansParamsSlice";

import fourth from "../../img/icons/fourthClass.svg";
import third from "../../img/icons/thirdClass.svg";
import second from "../../img/icons/secondClass.svg";
import first from "../../img/icons/firstClass.svg";
import { useDispatch, useSelector } from "react-redux";
import { filterVans } from "../../service/dataTransform";

export default function VanType() {
    const dispatch = useDispatch()
    // const p = useSelector(state => state.vansParamsSlice.result)
    // console.log('result from state')
    // console.log(p)


    const typeVan = useSelector((state) => state.vansParamsSlice.typeVan)
    const result = useSelector((state) => state.vansParamsSlice.result)
    // const vanChecked = useSelector((state) => state.vansParamsSlice.vanChecked);
    // const numVan = useSelector((state) => state.vansParamsSlice.numVan);

    const filterVansList = useSelector(
        (state) => state.vansParamsSlice.filterVansList
    );

    const changeVanType = (type) => {
        dispatch(setTypeVan(type))

        //dispatch(setFilterVansList(arr))
    }

    // console.log(result)
    // console.log('typeVan из типов кагона')
    // console.log(typeVan) 
    // let arr = filterVans(result, typeVan)
    //   console.log('при клике')
    //    console.log(arr)
    // console.log('filterVansList из типов вагона')
    // console.log(filterVansList)

    const styleWagonType = (type, range) => {
        return type === typeVan
            ? `wagon-type ${range}-active`
            : `wagon-type ${range}`;
    };

    const styleWagonTypeVector = (type) => {
        return type === typeVan ? "wagon-type_vector-active" : "wagon-type_vector";
    };

    return (
        <>
            <h2 className="wagon-type-title">Тип вагона</h2>
            <ul className="wagon-types-list">
                <li
                    className={styleWagonType("fourth", "seat")}
                    onClick={() => changeVanType("fourth")}
                >
                    <span className={styleWagonTypeVector("fourth")}>
                        <img src={fourth} alt={"seat"} />
                    </span>
                    Сидячий
                </li>
                <li
                    className={styleWagonType("third", "platzKarte")}
                    onClick={() => changeVanType("third")}
                >
                    <span className={styleWagonTypeVector("third")}>
                        <img src={third} alt={"platzKarte"} />
                    </span>
                    Плацкарт
                </li>
                <li
                    className={styleWagonType("second", "coupe")}
                    onClick={() => changeVanType("second")}
                >
                    <span className={styleWagonTypeVector("second")}>
                        <img src={second} alt={"coupe"} />
                    </span>
                    Купе
                </li>
                <li
                    className={styleWagonType("first", "luxury")}
                    onClick={() => changeVanType("first")}
                >
                    <span className={styleWagonTypeVector("first")}>
                        <img src={first} alt={"coupe"} />
                    </span>
                    Люкс
                </li>
            </ul>
        </>
    );
}