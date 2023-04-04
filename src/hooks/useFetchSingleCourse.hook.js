import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import { loginData } from "@services/mutation/login.service";
import { fetchSingleCourse } from "@services/query/fetchSingleCourse.service";

export const useFetchSingleCourse = () => {


    const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
        mutationKey: LOGIN_MUTATION_KEY,
        mutationFn: fetchSingleCourse,
        onSuccess: (returnedData) => {
            // data = returnedData?.data;
            // add toast here
            // console.log(returnedData?.data);
            // window.location.replace("/")
            // console.log(returnedData?.data?.user?.type)

        },
        onError: (error) => {
            // add error toast
            // toast.error('An error occured')
            alert('An error occured')
            // return console.log("An error occured");
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
