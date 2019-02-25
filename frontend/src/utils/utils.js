import axios from "axios";
export const getPosts = () => axios.get("http://localhost:8080/posts")
export const getPopularPosts = () => axios.get("http://localhost:8080/posts/popular")
