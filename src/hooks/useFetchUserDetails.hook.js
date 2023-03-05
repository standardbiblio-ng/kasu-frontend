import { useQuery } from "react-query";
import { useUserStore } from "@store/userStore.store";
import { fetchUserDetails } from "@services/query/staffDetails.service";
import { USER_QUERY_KEY } from "@config/queryKeys";
import shallow from "zustand/shallow";

export const useFetchUserDetails = () => {
  const { isAuthenticated, coreUserDetails } = useUserStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      coreUserDetails: state.coreUserDetails
    }),
    shallow
  );

  const [populateUserDetails] = useUserStore(
    (state) => [state.populateUserDetails],
    shallow
  );

  const { data, isLoading, error, isFetching } = useQuery(
    USER_QUERY_KEY,
    fetchUserDetails,
    {
      enabled: isAuthenticated,
      retry: 1,
      initialData: coreUserDetails,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      }
    }
  );

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
