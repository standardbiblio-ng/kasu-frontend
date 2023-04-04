import { useMutation } from "react-query";
import { uploadOlevelData } from "@services/mutation/uploadOlevel.service";

export const useUploadOlevel = () => {
    const { mutate, isLoading, isError, isSuccess, data } = useMutation({
        mutationKey: 'uploadOlevel',
        mutationFn: uploadOlevelData,
        onSuccess: () => {
            console.log("Success")
        },
        onError: () => {
            console.log("Error")
        }
    })

    return {
        mutate,
        isLoading,
        isError,
        isSuccess,
        data
    }
}