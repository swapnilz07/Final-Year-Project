import axios from "axios";

export async function getBankData(filters) {
  let token = localStorage.getItem("token");
  let config = {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      filters: filters || {},
    },
  };
  let data = await axios.get(`/get`, config);
  return data.data;
}
