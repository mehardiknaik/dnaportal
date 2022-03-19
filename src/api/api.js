import axios from "axios";

export const LoginApi = async (postData) => {
  return await axios.post(
    "https://crm.dnainfotel.com/PortalApi/token",
    postData
  );
};
export const GetUserInfoApi = async () => {
  const token = localStorage.getItem("token");
  return await axios.post("https://crm.dnainfotel.com/PortalApi/CustomerDetail",{}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
