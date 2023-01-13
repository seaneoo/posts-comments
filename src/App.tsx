import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Feed from "./components/Feed";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4 bg-red-500 border-red-700 text-center">
        <span className="block text-white font-bold">
          This project is a work in progress. Content is subject to change and
          stuff may not work yet.
        </span>
        <span className="block text-white font-bold">
          Check out the{" "}
          <a
            className="underline"
            href="https://github.com/seaneoo/posts-comments/"
          >
            GitHub repo
          </a>{" "}
          for updates.
        </span>
      </div>

      <div className="my-0 mx-auto p-4 lg:p-8 md:w-full lg:w-9/12 xl:w-1/2">
        <Feed />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
