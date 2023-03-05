import { publicInstanceAxios } from "@config/axiosInstance";

export const loginData = async (values) => {
  const res = await publicInstanceAxios.post("auth/signin", values);
  return res;
};
