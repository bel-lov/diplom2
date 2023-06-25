import { useGetCitiesQuery } from "../../api/api";
import Error from "../Error/Error";
import IsLoading from "../IsLoading/IsLoading";


export default function Datalist({ arg, onClick }) {
    const { currentData: result, isError, isFetching } = useGetCitiesQuery(arg)
    if (isFetching && !result) return <IsLoading />
    if (isError) return <Error />
    if (result.length > 0) {
        return (
            <>
                {result.map((item) => {
                    return (<option key={item._id} onClick={onClick(item._id)}>{item.name}</option>)
                })}
            </>
        )
    }
}