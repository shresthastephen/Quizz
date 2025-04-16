import { Link, Outlet } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="w-4/5 p-6">
        <Outlet /> {/* Renders nested admin routes */}
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/admin/categories" className="block p-2 bg-gray-200 rounded">Categories</Link></li>
          <li className="mb-2"><Link to="/admin/add-category" className="block p-2 bg-gray-200 rounded">Add Category</Link></li>
          <li className="mb-2"><Link to="/admin/free-questions" className="block p-2 bg-gray-200 rounded">Free Questions</Link></li>
          <li className="mb-2"><Link to="/admin/add-free-question" className="block p-2 bg-gray-200 rounded">Add Free Question</Link></li>
          <li className="mb-2"><Link to="/admin/questions" className="block p-2 bg-gray-200 rounded">Questions</Link></li>
          <li className="mb-2"><Link to="/admin/add-question" className="block p-2 bg-gray-200 rounded">Add Question</Link></li>
          <li className="mb-2"><Link to="/admin/users" className="block p-2 bg-gray-200 rounded">Users</Link></li>
          <li className="mb-2"><Link to="/admin/purchases" className="block p-2 bg-gray-200 rounded">Purchases</Link></li>
          <li className="mb-2"><Link to="/admin/add-purchase" className="block p-2 bg-gray-200 rounded">Add Purchase</Link></li>
          <li className="mb-2"><Link to="/admin/quiz-attempts" className="block p-2 bg-gray-200 rounded">Quiz Attempts</Link></li>
          <li className="mb-2"><Link to="/admin/sets" className="block p-2 bg-gray-200 rounded">Sets</Link></li>
          <li><Link to="/admin/add-set" className="block p-2 bg-gray-200 rounded">Add Set</Link></li>
        </ul>
      </nav>
    </div>
  );
}
