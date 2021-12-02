import axios, { AxiosRequestConfig } from "axios";

export const fetchUserPaginated = async (page: number) => {
  try {
    const url = `https://randomuser.me/api?page=${page}&pageSize=10&results=10`;
    const config: AxiosRequestConfig = {
      method: "get",
      url,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios(config);
    console.log(data);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
