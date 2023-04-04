import { authInstanceAxios } from "@config/axiosInstance";

export const fetchAllCoursesData = () => {
    const res = authInstanceAxios.get('courses')
    return res
}