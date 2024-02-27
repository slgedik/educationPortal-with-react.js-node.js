import React, { useEffect, useState } from 'react';
import { fetchQuestions } from './api';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
      setSelectedOptions(new Array(data.length).fill(null));
    };

    getQuestions();
  }, []);

  const handleAnswer = (index, selectedOption) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = selectedOption;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const evaluateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedOptions[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className='bg-container'>
      <Link to='/'>
        <button className='btn btn-light mx-4 mt-4 home'>Ana Sayfa</button>
      </Link>

      <div className='card-container pt-5'>
        {questions.map((question, index) => (
          <div key={index} className='card '>
            <p className='mt-4'>
              <strong>Soru {index + 1}:</strong> {question.question}
            </p>

            <ul>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <button
                    className={`option-button ${selectedOptions[index] === option ? 'selected' : ''} btn btn-outline-secondary`}
                    disabled={submitted}
                    onClick={() => handleAnswer(index, option)}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        ))}
        {!submitted && (
          <button className='btn btn-success mb-5 mt-2' onClick={handleSubmit}>
            Testi Bitir
          </button>
        )}
        {submitted && (
          <div>
            <h2>Değerlendirme</h2>
            <p>Soru sayısı: {questions.length}</p>
            <p>Doğru: {evaluateScore()}</p>
            <p>Yanlış: {questions.length - evaluateScore()}</p>
            <p>Doğru Cevaplar:</p>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  {question.question} - {question.answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
