import { useQuery } from "@tanstack/react-query";
import { getCommentsOnPost } from "../api";
import { Post as IPost } from "../api/types";
import Comment from "./Comment";
import User from "./User";

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  const { data, refetch } = useQuery(
    ["comments", post.id],
    () => getCommentsOnPost(post.id as unknown as string),
    { refetchOnWindowFocus: false, enabled: false }
  );

  const showComments = () => {
    refetch();
  };

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

      {!data && (
        <button
          type="button"
          className="block mt-4 py-1 px-2 bg-slate-100 border rounded"
          onClick={showComments}
        >
          Show Comments
        </button>
      )}

      {data && (
        <div className="mt-4 flex flex-col gap-4">
          {data.comments.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
