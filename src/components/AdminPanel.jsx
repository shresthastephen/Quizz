import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryForm from "./AdminComponents/CategoryForm";
import CategoryList from "./AdminComponents/CategoryList";
import QuestionForm from "./AdminComponents/QuestionForm";
import QuestionList from "./AdminComponents/QuestionList";
import UserForm from "./AdminComponents/UserForm";
import UserList from "./AdminComponents/UserList";
import SubscriptionForm from "./AdminComponents/SubscriptionForm";
import SubscriptionList from "./AdminComponents/SubscriptionList";

import axios from "axios";

const API_URL = "http://localhost:8080/admin";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="w-4/5 p-6">
          <Routes>
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/add-category" element={<CategoryForm />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/add-question" element={<QuestionForm />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/add-user" element={<UserForm />} />
            <Route path="/subscriptions" element={<SubscriptionList />} />
            <Route path="/add-subscription" element={<SubscriptionForm />} />
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
          <li className="mb-2"><Link to="/subscriptions" className="block p-2 bg-gray-200 rounded">Subscriptions</Link></li>
          <li><Link to="/add-subscription" className="block p-2 bg-gray-200 rounded">Add Subscription</Link></li>
        </ul>
      </nav>
    </div>
  );
}
