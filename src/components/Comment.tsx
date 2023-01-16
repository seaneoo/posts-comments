import { Comment as IComment } from "../api/types";
import User from "./User";

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  return (
    <div className="py-1 px-2 bg-slate-100 border rounded flex flex-col gap-1">
      <User userId={comment.user.id as unknown as string} showAvatar={false} />
      <span>{comment.body}</span>
    </div>
  );
}
