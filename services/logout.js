import axios from "axios";

export const logout = async (token) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_URL + "api/customerController/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response;
};
