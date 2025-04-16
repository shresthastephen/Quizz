import React, { useState, useEffect } from 'react';
import { fetchQuestions, deleteQuestion, updateQuestion } from '../../services/api';

const QuestionList = ({ setQuestions }) => {
  const [questions, setQuestionsState] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetchQuestions();
        setQuestionsState(response.data);
        if (setQuestions) setQuestions(response.data);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };
    loadQuestions();
  }, [setQuestions]);

  const handleDeleteQuestion = async (id) => {
    try {
      await deleteQuestion(id);
      const updatedQuestions = questions.filter((question) => question.id !== id);
      setQuestionsState(updatedQuestions);
      if (setQuestions) setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
    setEditedQuestionText(question.question);
  };

  const handleSaveEdit = async (id) => {
    try {
      const updatedQuestion = { question: editedQuestionText };
      await updateQuestion(id, updatedQuestion);

      const updatedQuestions = questions.map((q) =>
        q.id === id ? { ...q, question: editedQuestionText } : q
      );
      setQuestionsState(updatedQuestions);
      if (setQuestions) setQuestions(updatedQuestions);

      setEditingQuestion(null);
      setEditedQuestionText('');
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setEditedQuestionText('');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Questions List</h3>
      {questions.length === 0 ? (
        <p className="text-red-600">No questions found. Create a new question!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Question</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Set</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{question.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingQuestion && editingQuestion.id === question.id ? (
                      <input
                        type="text"
                        value={editedQuestionText}
                        onChange={(e) => setEditedQuestionText(e.target.value)}
                        className="p-1 border border-gray-300 rounded"
                      />
                    ) : (
                      question.question
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">{question.category?.name || '-'}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{question.set?.name || '-'}</td>
                  <td className="px-4 py-2 space-x-2">
                    {editingQuestion && editingQuestion.id === question.id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(question.id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditQuestion(question)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(question.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuestionList;

