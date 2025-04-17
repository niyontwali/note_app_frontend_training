import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthGuard from "./authGuard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
;

export default App;