import TrainsHead from '../../components/Trains/TrainsHead'
import { makeArgs } from '../../service/dataTransform';
import TrainsList from "../../components/Trains/TrainsList";
import Pagination from "../../components/Trains/Pagination";
import Error from '../../components/Error/Error'
import IsLoading from '../../components/IsLoading/IsLoading'
import { setTrainsResult } from '../../reducers/trainsParamsSlise';
import { useDispatch, useSelector } from "react-redux"
import { useGetRoutesQuery } from "../../api/api"
import '../selectOptions.css'


export default function TrainSelect() {
    const dispatch = useDispatch()
    const list = useSelector(state => state.routesParamsSlice)
    const trainsList = useSelector(state => state.trainsParamsSlice.trainsList)

    const args = makeArgs(list)

    const { currentData: result, isError, isFetching } = useGetRoutesQuery(args)

    if (isError) {
        return (<Error />)
    }
    if (isFetching) {
        return (<IsLoading />)
    }
    if (result) {
        dispatch(setTrainsResult(result))

        return (
            <section className="trains">
                <TrainsHead count={trainsList.total_count} />
                <TrainsList />
                <Pagination />
            </section>
        )
    }

}