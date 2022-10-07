import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ID from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<ID />} />
      </Routes>
    </div>
  );
}

export default App;
