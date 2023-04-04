import { authInstanceAxios } from "@config/axiosInstance";

export const fetchSingleCourse = async (courseId) => {
    const res = await authInstanceAxios.get(`courses/${courseId}`)
    return res?.data
}