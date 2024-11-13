import axios from "axios";

const url = "http://localhost:3000";

export const getPosts = async () => {
  const response = await axios.get(`${url}/api/posts`);
  return response.data;
};
