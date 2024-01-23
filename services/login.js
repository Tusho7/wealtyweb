import axios from "axios";

export const login = async (credentials) => {
  const formData = new FormData();
  formData.append("Email", credentials.email);
  formData.append("Password", credentials.password);
  console.log(formData);
  const response = await axios.post(
    process.env.NEXT_PUBLIC_URL + "api/customerController/login",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return response;
};
