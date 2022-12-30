import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { LogInPage } from "pages/LogInPage";
import { SignUpPage } from "pages/SignUpPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
