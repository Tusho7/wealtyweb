import axios from "axios";

export const getCustomer = async (token, router) => {
  const response = axios.get(
    process.env.NEXT_PUBLIC_URL + "/api/customerController/getCustomerById",
    {
      params: { Id: router.query.id },
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response;
};
