import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import { AcceptanceFeeData } from "@services/mutation/acceptanceFee.service";

export const useAcceptanceFee = () => {
    const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
        mutationKey: 'appeptanceFee',
        mutationFn: AcceptanceFeeData,
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
