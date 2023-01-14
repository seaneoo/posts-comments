import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import Feed from "./components/Feed";
import { MS_24_HOURS } from "./utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: MS_24_HOURS,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: MS_24_HOURS }}
    >
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
    </PersistQueryClientProvider>
  );
}

export default App;
