import { QueryClientProvider } from "react-query";
import SetupComponent from "../components/setup";
import { FilesProvider } from "../context/FileHandlerContext";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Setup = () => (
  <QueryClientProvider client={queryClient}>
    <FilesProvider>
      <SetupComponent />
    </FilesProvider>
  </QueryClientProvider>
);

export default Setup;
