import React, { useState, useEffect } from 'react';
import { 
  fetchFreeQuestions, 
  deleteFreeQuestion, 
  updateFreeQuestion 
} from '../../services/api'; 

const FreeQuestionList = ({ setQuestions }) => {
  const [questions, setQuestionsState] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState('');
  const [editedOptions, setEditedOptions] = useState(['', '', '', '']);
  const [editedCorrectAnswer, setEditedCorrectAnswer] = useState('');
  const [editedRemark, setEditedRemark] = useState('');

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetchFreeQuestions();
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
      await deleteFreeQuestion(id);
      const updatedQuestions = questions.filter((question) => question.qId !== id);
      setQuestionsState(updatedQuestions);
      if (setQuestions) setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
    setEditedQuestionText(question.question);
    setEditedOptions([question.option1, question.option2, question.option3, question.option4]);
    setEditedCorrectAnswer(question.answer);
    setEditedRemark(question.remark || '');
  };

  const handleSaveEdit = async (id) => {
    try {
      const updatedQuestion = {
        question: editedQuestionText,
        option1: editedOptions[0],
        option2: editedOptions[1],
        option3: editedOptions[2],
        option4: editedOptions[3],
        answer: editedCorrectAnswer,
        remark: editedRemark,
      };
      await updateFreeQuestion(id, updatedQuestion);

      const updatedQuestions = questions.map((question) =>
        question.qId === id ? { ...question, ...updatedQuestion } : question
      );
      setQuestionsState(updatedQuestions);
      if (setQuestions) setQuestions(updatedQuestions);

      setEditingQuestion(null);
      setEditedQuestionText('');
      setEditedOptions(['', '', '', '']);
      setEditedCorrectAnswer('');
      setEditedRemark('');
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setEditedQuestionText('');
    setEditedOptions(['', '', '', '']);
    setEditedCorrectAnswer('');
    setEditedRemark('');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Free Question List</h3>
      {questions.length === 0 ? (
        <p className="text-red-600">No questions found. Create a new question!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Question</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Correct Answer</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {questions.map((question) => (
                <tr key={question.qId}>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingQuestion && editingQuestion.qId === question.qId ? (
                      <textarea
                        value={editedQuestionText}
                        onChange={(e) => setEditedQuestionText(e.target.value)}
                        className="p-1 border border-gray-300 rounded w-full"
                      />
                    ) : (
                      question.question
                    )}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {question.category?.ctgName || 'N/A'}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {editingQuestion && editingQuestion.qId === question.qId ? (
                      <select
                        value={editedCorrectAnswer}
                        onChange={(e) => setEditedCorrectAnswer(e.target.value)}
                        className="p-1 border border-gray-300 rounded w-full"
                      >
                        <option value="">Select Correct Answer</option>
                        {editedOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option || `Option ${index + 1}`}
                          </option>
                        ))}
                      </select>
                    ) : (
                      question.answer
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {editingQuestion && editingQuestion.qId === question.qId ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(question.qId)}
                          className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditQuestion(question)}
                          className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(question.qId)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
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

export default FreeQuestionList;



