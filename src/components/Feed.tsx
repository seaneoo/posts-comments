import { useQuery } from "react-query";
import { getPosts } from "../api";
import User from "./User";

export default function Feed() {
  const { isLoading, data } = useQuery("posts", getPosts);

  if (isLoading || !data) {
    return (
      <div>
        <span>Loading</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {data.posts.map((post, i) => (
        <div
          key={i}
          className="block p-6 bg-white border border-gray-200 rounded-lg"
        >
          <User key={i} userId={post.userId as unknown as string} />
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
      ))}
    </div>
  );
}
