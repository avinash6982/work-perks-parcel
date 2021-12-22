import { Route, Routes } from "react-router";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<h1>setup</h1>} />
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);

export default ApplicationRoutes;
