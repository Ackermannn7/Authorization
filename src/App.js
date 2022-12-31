import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import {Authorization} from "pages/Authorization";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Authorization />} />
    </Routes>
  );
}

export default App;
