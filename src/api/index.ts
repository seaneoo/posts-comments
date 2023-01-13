import { formatStr } from "../utils";
import { Post } from "./types";

/**
 * Fetches a resource at the provided URI. Optionally, you may provide a list of arguments to use in the URI.
 *
 * Ex: no argument: fetchResource("https://dummyjson.com/posts");
 * with an argument: fetchResource("https://dummyjson.com/posts/{0}", id)
 */
const fetchResource = async <T>(uri: string, ...args: string[]) => {
  return await fetch(formatStr(uri, ...args))
    .then((res) => res.json())
    .then((json) => json as T);
};

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
