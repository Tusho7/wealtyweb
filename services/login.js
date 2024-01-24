import axios from "axios";

export const login = async (credentials) => {
  const formData = new FormData();
  formData.append("email", credentials.email);
  formData.append("password", credentials.password);
  const response = await axios.post(
    process.env.NEXT_PUBLIC_URL + "api/customerController/login",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return response;
};
