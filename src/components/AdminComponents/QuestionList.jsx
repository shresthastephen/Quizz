// src/components/AdminComponents/QuestionList.jsx
import React, { useState, useEffect } from 'react';
import { fetchQuestions, deleteQuestion, updateQuestion } from '../../services/api';

const QuestionList = ({ setQuestions }) => {
  const [questions, setQuestionsState] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const { data } = await fetchQuestions();
        console.log('🔍 questions payload:', data);

        // Normalize ID to `qId` no matter if your JSON uses `id`, `qId` or `q_id`
        const normalized = data.map(q => ({
          ...q,
          qId: q.qId ?? q.id ?? q.q_id
        }));
        console.log('✅ normalized questions:', normalized);

        setQuestionsState(normalized);
        if (setQuestions) setQuestions(normalized);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };
    loadQuestions();
  }, [setQuestions]);

  const handleDeleteQuestion = async (id) => {
    if (id == null || typeof id !== 'number') {
      console.error('🚫 Invalid id for deletion:', id);
      return;
    }
    try {
      await deleteQuestion(id);
      const updated = questions.filter(q => q.qId !== id);
      setQuestionsState(updated);
      if (setQuestions) setQuestions(updated);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestionId(question.qId);
    setEditedQuestionText(question.question);
  };

  const handleSaveEdit = async (id) => {
    if (id == null || typeof id !== 'number') {
      console.error('🚫 Invalid id for update:', id);
      return;
    }
    try {
      const updatedQuestion = { question: editedQuestionText };
      await updateQuestion(id, updatedQuestion);

      const updatedList = questions.map(q =>
        q.qId === id ? { ...q, ...updatedQuestion } : q
      );
      setQuestionsState(updatedList);
      if (setQuestions) setQuestions(updatedList);
      setEditingQuestionId(null);
      setEditedQuestionText('');
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestionId(null);
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
              {questions.map(question => (
                <tr key={question.qId} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{question.qId}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingQuestionId === question.qId ? (
                      <textarea
                        value={editedQuestionText}
                        onChange={e => setEditedQuestionText(e.target.value)}
                        className="p-1 border border-gray-300 rounded w-full"
                      />
                    ) : (
                      question.question
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {question.category?.ctgName || '-'}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {question.set?.setName || '-'}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {editingQuestionId === question.qId ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(question.qId)}
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
                          onClick={() => handleDeleteQuestion(question.qId)}
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
