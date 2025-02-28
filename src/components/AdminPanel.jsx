import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryForm from "./AdminComponents/CategoryForm";
import CategoryList from "./AdminComponents/CategoryList";
import QuestionForm from "./AdminComponents/FreeQuestionForm";
import QuestionList from "./AdminComponents/FreeQuestionList";
import UserForm from "./AdminComponents/UserForm";
import UserList from "./AdminComponents/UserList";
import PurchaseForm from "./AdminComponents/PurchaseForm";
import PurchaseList from "./AdminComponents/PurchaseList";
import QuizAttemptForm from "./AdminComponents/QuizAttemptForm";
import QuizAttemptList from "./AdminComponents/QuizAttemptList";
import SetForm from "./AdminComponents/SetForm";
import SetList from "./AdminComponents/SetList";

import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="w-4/5 p-6">
          <Routes>
            {/* Category Routes */}
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/add-category" element={<CategoryForm />} />
            
            {/* Question Routes */}
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/add-question" element={<QuestionForm />} />
            
            {/* User Routes */}
            <Route path="/users" element={<UserList />} />
            <Route path="/add-user" element={<UserForm />} />
            
            {/* Purchase Routes */}
            <Route path="/purchases" element={<PurchaseList />} />
            <Route path="/add-purchase" element={<PurchaseForm />} />
            
            {/* Quiz Attempt Routes */}
            <Route path="/quiz-attempts" element={<QuizAttemptList />} />
            <Route path="/add-quiz-attempt" element={<QuizAttemptForm />} />
            
            {/* Set Routes */}
            <Route path="/sets" element={<SetList />} />
            <Route path="/add-set" element={<SetForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/categories" className="block p-2 bg-gray-200 rounded">Categories</Link></li>
          <li className="mb-2"><Link to="/add-category" className="block p-2 bg-gray-200 rounded">Add Category</Link></li>
          <li className="mb-2"><Link to="/questions" className="block p-2 bg-gray-200 rounded">Questions</Link></li>
          <li className="mb-2"><Link to="/add-question" className="block p-2 bg-gray-200 rounded">Add Question</Link></li>
          <li className="mb-2"><Link to="/users" className="block p-2 bg-gray-200 rounded">Users</Link></li>
          <li className="mb-2"><Link to="/add-user" className="block p-2 bg-gray-200 rounded">Add User</Link></li>
          
          {/* New Links for Purchases, Quiz Attempts, and Sets */}
          <li className="mb-2"><Link to="/purchases" className="block p-2 bg-gray-200 rounded">Purchases</Link></li>
          <li className="mb-2"><Link to="/add-purchase" className="block p-2 bg-gray-200 rounded">Add Purchase</Link></li>
          <li className="mb-2"><Link to="/quiz-attempts" className="block p-2 bg-gray-200 rounded">Quiz Attempts</Link></li>
          <li className="mb-2"><Link to="/add-quiz-attempt" className="block p-2 bg-gray-200 rounded">Add Quiz Attempt</Link></li>
          <li className="mb-2"><Link to="/sets" className="block p-2 bg-gray-200 rounded">Sets</Link></li>
          <li><Link to="/add-set" className="block p-2 bg-gray-200 rounded">Add Set</Link></li>
        </ul>
      </nav>
    </div>
  );
}
