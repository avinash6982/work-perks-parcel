import SetupComponent from "../components/setup";
import { FilesProvider } from "../context/FileHandlerContext";

const Setup = () => (
  <FilesProvider>
    <SetupComponent />
  </FilesProvider>
);

export default Setup;
