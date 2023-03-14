import { authInstanceAxios } from "@config/axiosInstance";

export const uploadApplicantsData = async (values) => {
    const res = await authInstanceAxios.post("applicants/upload", values);
    return res;
};
