import { Post } from "./types";

export const getPosts = async () => {
  return await fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((json) => {
      return json as { posts: Post[] };
    });
};

export const getPost = async (id: string) => {
  return await fetch(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json as Post;
    });
};
