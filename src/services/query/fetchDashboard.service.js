import { authInstanceAxios } from "@config/axiosInstance";

export const fetchDashboardStats = () => {
    const res = authInstanceAxios.get('dashboard')
    return res?.data
}