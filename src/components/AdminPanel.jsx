import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [mcqs, setMcqs] = useState([]);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 relative">
          <AdminProfile />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  mcqs={mcqs}
                />
              }
            />
            <Route
              path="/add-course"
              element={<AddCourse setCourses={setCourses} />}
            />
            <Route
              path="/add-mcq"
              element={<AddMCQ courses={courses} setMcqs={setMcqs} />}
            />
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
            <Link to="/" className="block p-2 bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/add-course" className="block p-2 bg-gray-200 rounded">
              Add Course
            </Link>
          </li>
          <li>
            <Link to="/add-mcq" className="block p-2 bg-gray-200 rounded">
              Add MCQ
            </Link>
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
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}

function Dashboard({ courses, setCourses, mcqs }) {
  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmDelete) {
      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-2">Courses</h2>
        {courses.length === 0 ? (
          <p>No courses added yet.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>
                  {course.name} (Remarks: {course.remarks}) -{" "}
                  {mcqs.filter((mcq) => mcq.course === course.name).length}{" "}
                  Questions
                </span>
                <button
                  onClick={() => handleDelete(index)}
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

function AddCourse({ setCourses }) {
  const [course, setCourse] = useState({ name: "", remarks: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses((prevCourses) => [...prevCourses, course]);
    alert("Course Added Successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Course</h1>
      <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course Name"
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Remarks"
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setCourse({ ...course, remarks: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

function AddMCQ({ courses, setMcqs }) {
  const [mcq, setMCQ] = useState({
    question: "",
    options: ["", "", "", ""],
    correct: "",
    remarks: "",
    course: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMcqs((prevMcqs) => [...prevMcqs, mcq]);
    alert("MCQ Added Successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add MCQ</h1>
      <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <select
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setMCQ({ ...mcq, course: e.target.value })}
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Question"
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setMCQ({ ...mcq, question: e.target.value })}
          ></textarea>
          {mcq.options.map((opt, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              className="w-full p-2 border rounded mb-2"
              required
              onChange={(e) => {
                let newOptions = [...mcq.options];
                newOptions[index] = e.target.value;
                setMCQ({ ...mcq, options: newOptions });
              }}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setMCQ({ ...mcq, correct: e.target.value })}
          />
          <input
            type="number"
            placeholder="Remarks"
            className="w-full p-2 border rounded mb-2"
            required
            onChange={(e) => setMCQ({ ...mcq, remarks: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Add MCQ
          </button>
        </form>
      </div>
    </div>
  );
}
