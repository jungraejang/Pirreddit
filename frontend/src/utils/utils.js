import axios from "axios";
export const getPosts = () => axios.get("/posts")
export const getPopularPosts = () => axios.get("/posts/popular")
