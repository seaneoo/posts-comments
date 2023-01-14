import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import { MS_24_HOURS } from "../utils";
import Post from "./Post";

export default function Feed() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    cacheTime: MS_24_HOURS,
    staleTime: MS_24_HOURS,
  });

  if (query.isLoading || query.isFetching) {
    return (
      <div>
        <span>Loading</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {query.data!.posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
}
