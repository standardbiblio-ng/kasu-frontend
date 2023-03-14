/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { backendApiURL } from "@config/index";
import { useUserStore } from "@store/userStore.store";

const instanceSettings = {
  baseURL: backendApiURL,
  timeout: 300000,
};
let jwt = useUserStore?.getState()?.userDetails?.token;
let token = useUserStore.subscribe((state) => state.userDetails?.token, console.log('tokenize', jwt))
function formatResponseError({ response, ...rest }) {
  let formatedError = {
    message:
      response?.data?.message === "An internal server error occurred"
        ? "Something went wrong, try again"
        : response?.data?.message?.[0]?.messages?.[0]?.message ===
          "An internal server error occurred"
          ? "Something went wrong, try again"
          : response?.data?.message?.[0]?.messages?.[0]?.message ||
          response?.data?.message ||
          "Something went wrong, try again",
    ...rest,
  };
  return Promise.reject(response);
}

let authInstanceAxios = axios.create({
  ...instanceSettings,
  headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
});

let publicInstanceAxios = axios.create(instanceSettings);

publicInstanceAxios.interceptors.response.use(null, formatResponseError);
authInstanceAxios.interceptors.response.use(null, formatResponseError);
authInstanceAxios.interceptors.request.use(null, formatResponseError);

export { publicInstanceAxios, authInstanceAxios };
