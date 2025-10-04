import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskPage from "pages/tasks/ui/TaskPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
