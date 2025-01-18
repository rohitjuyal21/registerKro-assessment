import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/task/:taskId" element={<TaskDetailsPage />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
