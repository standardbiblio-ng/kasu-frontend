import { authInstanceAxios } from "@config/axiosInstance";

export const uploadOlevelData = async (value) => {
    const res = authInstanceAxios.post('applicants/me/olevel', value)

    return res
} 