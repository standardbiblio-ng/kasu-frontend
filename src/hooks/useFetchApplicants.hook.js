import { useQuery } from "react-query";
import { useUserStore } from "@store/userStore.store";
import { fetchApplicants } from "@services/query/fetchApplicants.service";
import { USER_QUERY_KEY } from "@config/queryKeys";
import shallow from "zustand/shallow";

export const useFetchApplicants = () => {
    const { isAuthenticated } = useUserStore(
        (state) => ({ isAuthenticated: state.isAuthenticated, }),
        shallow
    );

    const { data, isLoading, error, isFetching, } = useQuery(
        'applicants',
        fetchApplicants,
        {
            enabled: isAuthenticated,
            retry: 1,
        }
    );
    console.log(data)
    return {
        data,
        isLoading,
        error,
        isFetching,
    };
};
