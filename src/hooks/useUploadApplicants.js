import { useMutation } from "react-query";
import { uploadApplicantsData } from "@services/mutation/uploadApplicant.service";

export const useUploadApplicants = () => {

    const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
        mutationKey: 'uploadApplicantsData',
        mutationFn: uploadApplicantsData,
        onSuccess: (returnedData) => {

        },
        onError: (error) => {
        },
    });

    return {
        uploadApplicantMutate: mutate,
        uploadApplicantLoading: isLoading,
        uploadApplicantError: isError,
        uploadApplicantSuccess: isSuccess,
        reset,
        uploadApplicantData: data,
    };
};
