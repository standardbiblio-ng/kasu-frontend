import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import { useUserStore } from "@store/userStore.store";
import shallow from "zustand/shallow";
import { loginData } from "@services/mutation/login.service";

export const useLogin = () => {
  const [populateUserInfoAndJwt] = useUserStore(
    (state) => [state.populateUserInfoAndJwt],
    shallow
  );

  const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
    mutationKey: LOGIN_MUTATION_KEY,
    mutationFn: loginData,
    onSuccess: (returnedData) => {
      populateUserInfoAndJwt(returnedData?.data);
      // data = returnedData?.data;
      // add toast here
      // console.log(returnedData?.data);
      // window.location.replace("/")
      // console.log(returnedData?.data?.user?.type)

    },
    onError: (error) => {
      // add error toast
      // alert(error.data.message)
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
