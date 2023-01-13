import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import Post from "./Post";

export default function Feed() {
  const { isLoading, data } = useQuery(["posts"], getPosts);

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
        <Post key={i} post={post} />
      ))}
    </div>
  );
}
