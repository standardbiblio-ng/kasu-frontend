import { useQuery } from "react-query";
import { fetchDashboardStats } from "@services/query/fetchDashboard.service";
import { useUserStore } from "@store/userStore.store";
import { fetchApplicants } from "@services/query/fetchApplicants.service";

export const useFetchDashboardStats = () => {
    
    );
const { data, isLoading, isFetching, isError, isSuccess } = useQuery(
    'dashbaordStats',
    fetchDashboardStats,
    {
        enabled: true,
        retry: 1
    }
)

return { data, isLoading, isFetching, isError, isSuccess }
}