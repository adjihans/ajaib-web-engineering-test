import axios, { AxiosRequestConfig } from "axios";
import querystring, { ParsedUrlQueryInput } from "querystring";

const baseURL = "https://randomuser.me/api";

interface Payload {
  page: number;
  gender?: string;
  keyword?: string;
  sortBy?: string;
  sortOrder?: string;
}

export const fetchUserPaginated = async (payload: Payload) => {
  const { page, gender, keyword, sortBy, sortOrder } = payload;
  let query: ParsedUrlQueryInput = { page };
  if (gender) query.gender = gender;
  if (keyword) query.keyword = keyword;
  if (sortBy) query.sortBy = sortBy;
  if (sortOrder) query.sortOrder = sortOrder;

  const queryParams = querystring.stringify(query);
  try {
    const url = `${baseURL}?${queryParams}&pageSize=10&results=10`;
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
