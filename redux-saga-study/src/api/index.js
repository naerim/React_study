import axios from "axios";

export const getPosts = () =>
  axios.get(`http://jsonplaceholder.typicode.com/posts/1`);

export const getComments = () =>
  axios.get(`http://jsonplaceholder.typicode.com/comments`);
