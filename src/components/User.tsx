import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";
import { MS_24_HOURS } from "../utils";

type Props = {
  userId: string;
  showAvatar?: boolean;
};

export default function User({ userId, showAvatar = true }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
    cacheTime: MS_24_HOURS,
    staleTime: MS_24_HOURS,
  });

  if (isLoading || !data) {
    return <></>;
  }

  return (
    <div className="inline-flex flex-row gap-2 items-center">
      {showAvatar && (
        <img
          className="w-12 rounded-full border-2"
          src={`https://i.pravatar.cc/300?u=${data.image}`}
          alt={`User ${userId}`}
        />
      )}
      <span className="text-slate-700 font-bold">{data.username}</span>
    </div>
  );
}
