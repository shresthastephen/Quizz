import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import admin components
import AdminPanel from "./components/AdminPanel";
import CategoryList from "./components/AdminComponents/CategoryList";
import CategoryForm from "./components/AdminComponents/CategoryForm";
import QuestionList from "./components/AdminComponents/QuestionList";
import QuestionForm from "./components/AdminComponents/QuestionForm";
import UserList from "./components/AdminComponents/UserList";
import UserForm from "./components/AdminComponents/UserForm";
import PurchaseList from "./components/AdminComponents/PurchaseList";
import PurchaseForm from "./components/AdminComponents/PurchaseForm";
import QuizAttemptList from "./components/AdminComponents/QuizAttemptList";
import QuizAttemptForm from "./components/AdminComponents/QuizAttemptForm";
import SetList from "./components/AdminComponents/SetList";
import SetForm from "./components/AdminComponents/SetForm";

const App1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="categories" element={<CategoryList />} />
          <Route path="add-category" element={<CategoryForm />} />
          <Route path="questions" element={<QuestionList />} />
          <Route path="add-question" element={<QuestionForm />} />
          <Route path="users" element={<UserList />} />
          <Route path="add-user" element={<UserForm />} />
          <Route path="purchases" element={<PurchaseList />} />
          <Route path="add-purchase" element={<PurchaseForm />} />
          <Route path="quiz-attempts" element={<QuizAttemptList />} />
          <Route path="add-quiz-attempt" element={<QuizAttemptForm />} />
          <Route path="sets" element={<SetList />} />
          <Route path="add-set" element={<SetForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App1;
