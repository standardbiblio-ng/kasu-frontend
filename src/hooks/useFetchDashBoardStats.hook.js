import { useQuery } from "react-query";
import { fetchDashboardStats } from "@services/query/fetchDashboard.service";
import { useUserStore } from "@store/userStore.store";
import { fetchApplicants } from "@services/query/fetchApplicants.service";
import shallow from 'zustand/shallow'

export const useFetchDashboardStats = () => {
    const { isAuthenticated } = useUserStore(
        (state) => ({ isAuthenticated: state.isAuthenticated, }),
        shallow
    );
    const { data, isLoading, isFetching, isError, isSuccess } = useQuery(
        'dashbaordStats',
        fetchDashboardStats,
        {
            enabled: isAuthenticated,
            retry: 1
        }
    )

    return { data, isLoading, isFetching, isError, isSuccess }
}