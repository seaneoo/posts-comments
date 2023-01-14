export default function Alert() {
  return (
    <div className="flex justify-center items-center p-2 lg:p-4 bg-slate-100 border text-center">
      <span className="text-sm text-slate-600 font-bold">
        This project is a work in progress. Content is subject to change and
        stuff may not work yet. Check out the{" "}
        <a
          className="underline"
          href="https://github.com/seaneoo/posts-comments/"
        >
          GitHub repo
        </a>{" "}
        for updates.
      </span>
    </div>
  );
}
