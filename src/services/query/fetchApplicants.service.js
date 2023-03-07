import { authInstanceAxios } from "@config/axiosInstance";
// import { useUserCredentialsStore } from "@store/authStore.store";

/**
 * @desc gets fresh user details..
 * @returns {Object}
 */
// let jwt = useUserCredentialsStore.getState()?.jwt;

export const fetchApplicants = async () => {
    const applicants = await authInstanceAxios.get("applicants");
    return applicants?.data;
};
