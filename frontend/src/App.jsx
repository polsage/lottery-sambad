import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import Archive from "./pages/Archive";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
