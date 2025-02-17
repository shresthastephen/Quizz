import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react";
import CategoryForm from './AdminComponents/CategoryForm';
import CategoryList from './AdminComponents/CategoryList';
import QuestionForm from './AdminComponents/QuestionForm';
import QuestionList from './AdminComponents/QuestionList';
import QuizAttemptForm from './AdminComponents/QuizAttemptForm';
import QuizAttemptList from './AdminComponents/QuizAttemptList';
import SubscriptionForm from './AdminComponents/SubscriptionForm';
import SubscriptionList from './AdminComponents/SubscriptionList';
import UserForm from './AdminComponents/UserForm'; // Import UserForm
import UserList from './AdminComponents/Userlist'; // Import UserList

import { 
  createCategory, createQuestion, createQuizAttempt, createSubscription,
  createUser, getCategories, getQuestions, getQuizAttempts, getSubscriptions, getUsers 
} from '../services/api';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [users, setUsers] = useState([]); // State for users

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoryRes, questionRes, quizAttemptRes, subscriptionRes, userRes] = await Promise.all([
        getCategories(),
        getQuestions(),
        getQuizAttempts(),
        getSubscriptions(),
        getUsers() // Fetch users
      ]);
      setCategories(categoryRes.data);
      setQuestions(questionRes.data);
      setQuizAttempts(quizAttemptRes.data);
      setSubscriptions(subscriptionRes.data);
      setUsers(userRes.data); // Set users data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Add new user
  const handleAddUser = async (userData) => {
    try {
      const response = await createUser(userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // ✅ Add new category
  const handleAddCategory = async (categoryData) => {
    try {
      const response = await createCategory(categoryData);
      setCategories([...categories, response.data]);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  // ✅ Add new question
  const handleAddQuestion = async (questionData) => {
    try {
      const response = await createQuestion(questionData);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };

  // ✅ Add new quiz attempt
  const handleAddQuizAttempt = async (quizAttemptData) => {
    try {
      const response = await createQuizAttempt(quizAttemptData);
      setQuizAttempts([...quizAttempts, response.data]);
    } catch (error) {
      console.error("Error creating quiz attempt:", error);
    }
  };

  // ✅ Add new subscription
  const handleAddSubscription = async (subscriptionData) => {
    try {
      const response = await createSubscription(subscriptionData);
      setSubscriptions([...subscriptions, response.data]);
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 relative">
          <AdminProfile />
          <Routes>
            <Route 
              path="/" 
              element={<Dashboard 
                categories={categories} 
                questions={questions} 
                quizAttempts={quizAttempts} 
                subscriptions={subscriptions} 
                users={users} // Pass users to the dashboard
              />} 
            />
            <Route path="/add-category" element={<CategoryForm onSave={handleAddCategory} />} />
            <Route path="/add-question" element={<QuestionForm onSave={handleAddQuestion} />} />
            <Route path="/add-quiz-attempt" element={<QuizAttemptForm onSave={handleAddQuizAttempt} />} />
            <Route path="/add-subscription" element={<SubscriptionForm onSave={handleAddSubscription} />} />
            <Route path="/add-user" element={<UserForm onSave={handleAddUser} />} /> {/* Add UserForm route */}
            <Route path="/users" element={<UserList users={users} />} /> {/* Add UserList route */}
          </Routes>
        </div>
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
          <li className="mb-2">
            <Link to="/" className="block p-2 bg-gray-200 rounded">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/add-category" className="block p-2 bg-gray-200 rounded">Add Category</Link>
          </li>
          <li className="mb-2">
            <Link to="/add-question" className="block p-2 bg-gray-200 rounded">Add Question</Link>
          </li>
          <li className="mb-2">
            <Link to="/add-quiz-attempt" className="block p-2 bg-gray-200 rounded">Add Quiz Attempt</Link>
          </li>
          <li className="mb-2">
            <Link to="/add-subscription" className="block p-2 bg-gray-200 rounded">Add Subscription</Link>
          </li >
          <li className="mb-2">
            <Link to="/add-user" className="block p-2 bg-gray-200 rounded">Add User</Link> {/* Add link to add user */}
          </li>
          <li>
            <Link to="/users" className="block p-2 bg-gray-200 rounded">Users</Link> {/* Add link to user list */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

function AdminProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/signin");
  };

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-4 bg-white p-2 shadow-md rounded-lg">
      <span className="font-bold">Admin</span>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded">Logout</button>
    </div>
  );
}

function Dashboard({ categories, setCategories, questions, setQuestions, quizAttempts, setQuizAttempts, subscriptions, setSubscriptions, users, setUsers }) {

  // Helper function to handle deletion
  const handleDelete = (type, index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      let updatedData;

      switch (type) {
        case "category":
          updatedData = categories.filter((_, i) => i !== index);
          setCategories(updatedData);
          break;
        case "question":
          updatedData = questions.filter((_, i) => i !== index);
          setQuestions(updatedData);
          break;
        case "quizAttempt":
          updatedData = quizAttempts.filter((_, i) => i !== index);
          setQuizAttempts(updatedData);
          break;
        case "subscription":
          updatedData = subscriptions.filter((_, i) => i !== index);
          setSubscriptions(updatedData);
          break;
        case "user":
          updatedData = users.filter((_, i) => i !== index);
          setUsers(updatedData);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Categories */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        {categories.length === 0 ? (
          <p>No categories added yet.</p>
        ) : (
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{category.name}</span>
                <button
                  onClick={() => handleDelete("category", index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Questions */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Questions</h2>
        {questions.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{question.text}</span>
                <button
                  onClick={() => handleDelete("question", index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Quiz Attempts */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Quiz Attempts</h2>
        {quizAttempts.length === 0 ? (
          <p>No quiz attempts recorded yet.</p>
        ) : (
          <ul>
            {quizAttempts.map((attempt, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{attempt.user} - {attempt.score} points</span>
                <button
                  onClick={() => handleDelete("quizAttempt", index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Subscriptions */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Subscriptions</h2>
        {subscriptions.length === 0 ? (
          <p>No subscriptions yet.</p>
        ) : (
          <ul>
            {subscriptions.map((subscription, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{subscription.user} - {subscription.plan}</span>
                <button
                  onClick={() => handleDelete("subscription", index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Users */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-2">Users</h2>
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{user.name} - {user.email}</span>
                <button
                  onClick={() => handleDelete("user", index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
