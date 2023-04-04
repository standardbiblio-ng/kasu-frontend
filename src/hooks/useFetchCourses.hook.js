import { useQuery } from "react-query";
import { useUserStore } from "@store/userStore.store";
import { fetchAllCoursesData } from "@services/query/fetchAllCourses.service";
import shallow from 'zustand/shallow'

export const useFetchAllCourses = () => {
    const { isAuthenticated } = useUserStore(
        (state) => ({ isAuthenticated: state.isAuthenticated, }),
        shallow
    );

    const { data, isFetching, isLoading, isError, isSuccess } = useQuery(
        'fetchAllCourses',
        fetchAllCoursesData,
        {
            enabled: isAuthenticated,
            retry: 1
        }
    )
    return { data, isFetching, isLoading, isError, isSuccess }
}