import { formatStr } from "../utils";
import { Comment, Post, User } from "./types";

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

export const getUser = async (id: string) => {
  return fetchResource<User>("https://dummyjson.com/users/{0}", id);
};

export const getPosts = async () => {
  return fetchResource<{ posts: Post[] }>("https://dummyjson.com/posts");
};

export const getPost = async (id: string) => {
  return fetchResource<Post>("https://dummyjson.com/posts/{0}", id);
};

export const getCommentsOnPost = async (id: string) => {
  return fetchResource<{ comments: Comment[] }>(
    "https://dummyjson.com/posts/{0}/comments",
    id
  );
};
