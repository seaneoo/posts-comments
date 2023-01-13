export type User = {
  id: number;
  username: string;
  image: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export type Comment = {
  id: number;
  body: string;
  postId: number;
  user: { id: number; username: string };
};
