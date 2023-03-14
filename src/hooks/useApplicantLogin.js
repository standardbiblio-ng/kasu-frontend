import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import { useUserStore } from "@store/userStore.store";
import shallow from "zustand/shallow";
import { applicantLoginData } from "@services/mutation/applicantLogin.service";

export const useApplicantLogin = () => {
    const [populateUserInfoAndJwt] = useUserStore(
        (state) => [state.populateUserInfoAndJwt],
        shallow
    );

    const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
        mutationKey: LOGIN_MUTATION_KEY,
        mutationFn: applicantLoginData,
        onSuccess: (returnedData) => {
            populateUserInfoAndJwt(returnedData?.data);
        },
        onError: (error) => {
            return console.log("An error occured");
        },
    });

    return {
        mutate,
        isLoading,
        isError,
        isSuccess,
        reset,
        data,
    };
};
