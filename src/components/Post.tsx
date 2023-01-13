import { Post as IPost } from "../api/types";
import User from "./User";

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg">
      <User userId={post.userId as unknown as string} />
      <span className="block font-serif text-xl font-bold capitalize border-b my-2">
        {post.title}
      </span>
      <span className="block mb-4">{post.body}</span>
      {post.reactions > 0 && (
        <span className="py-1 px-2 bg-slate-100 border rounded">
          ❤️ {post.reactions}
        </span>
      )}
    </div>
  );
}
