import { publicInstanceAxios } from "@config/axiosInstance";

export const applicantLoginData = async (values) => {
    const res = await publicInstanceAxios.post("applicants/login", values);
    return res;
};
