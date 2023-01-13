export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
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
