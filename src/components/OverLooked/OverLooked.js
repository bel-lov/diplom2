import { useGetLastRoutesQuery } from "../../api/api";
import LastTrainsList from "./LastTrainsList";
import IsLoading from "../IsLoading/IsLoading";
import Error from "../Error/Error";

export default function OverLooked() {
    const { currentData: result, isError, isFetching } = useGetLastRoutesQuery()
    if (isFetching && !result) return <IsLoading />
    if (isError) return <Error />
    if (result) {
        return (
            <section className="overlooked-tickets">
                <h2>Последние билеты</h2>
                <LastTrainsList list={result} />
            </section>)
    }
}