import { useQuery } from "react-query";
import { getUser } from "../api";

type Props = {
  userId: string;
};

export default function User({ userId }: Props) {
  const { isLoading, data } = useQuery(["users", userId], () =>
    getUser(userId)
  );

  if (isLoading || !data) {
    return <></>;
  }

  return (
    <div className="inline-flex flex-row gap-2 items-center">
      <img
        className="w-12 rounded-full border-2"
        src={`https://i.pravatar.cc/300?u=${data.image}`}
        alt={`User ${userId}`}
      />
      <span className="text-slate-700 font-bold">{data.username}</span>
    </div>
  );
}
