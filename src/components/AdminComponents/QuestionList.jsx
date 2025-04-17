import React, { useState, useEffect } from 'react';
import { 
  fetchQuestions, 
  deleteQuestion, 
  updateQuestion 
} from '../../services/api'; 

const QuestionList = ({ setQuestions }) => {
  const [questions, setQuestionsState] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedQuestionText, setEditedQuestionText] = useState('');
  const [editedOptions, setEditedOptions] = useState(['', '', '', '']);
  const [editedCorrectAnswer, setEditedCorrectAnswer] = useState('');
  const [editedRemark, setEditedRemark] = useState('');

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
      await updateQuestion(id, updatedQuestion);

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
                <tr key={question.qId} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{question.qId}</td>
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
                  <td className="px-4 py-2 text-sm text-gray-700">{question.category?.ctgName || '-'}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{question.set?.name || '-'}</td>
                  <td className="px-4 py-2 space-x-2">
                    {editingQuestion && editingQuestion.qId === question.qId ? (
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

