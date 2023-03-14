import { authInstanceAxios } from "@config/axiosInstance";

export const AcceptanceFeeData = async (value) => {
    const res = await authInstanceAxios.get(`payments/initialize?feerecordId=${value}`);
    return res;
};