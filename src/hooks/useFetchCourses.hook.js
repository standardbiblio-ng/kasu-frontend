import { useQuery } from "react-query";
import { useUserStore } from "@store/userStore.store";
import { fetchAllCoursesData } from "@services/query/fetchAllCourses.service";

export const useFetchAllCourses = () => {


    const { data, isFetching, isLoading, isError, isSuccess } = useQuery(
        'fetchAllCourses',
        fetchAllCoursesData,
        {
            enabled: true,
            retry: 1
        }
    )
    return { data, isFetching, isLoading, isError, isSuccess }
}