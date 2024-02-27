import React, { useState } from 'react';
import { addQuestion } from './api';
import { Link } from 'react-router-dom';
const AddQuestion = () => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddQuestion = async () => {
    const newQuestionData = {
      question: newQuestion,
      options: newOptions.filter((option) => option.trim() !== ''),
      answer: newAnswer,
    };

    await addQuestion(newQuestionData);
    setNewQuestion('');
    setNewOptions(['', '', '', '']);
    setNewAnswer('');

    alert('Soru kaydedildi !!');
  };

  return (
    <div className='bg-container'>
      <Link to='/'>
        <button className='btn btn-light mx-4 mt-4 home'>Ana Sayfa</button>
      </Link>
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='col-md-6'>
          <h2 className='mb-4 just'>Soru Ekle</h2>
          <form>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Soru'
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder={`Seçenek ${i + 1}`}
                  value={newOptions[i]}
                  onChange={(e) => {
                    const options = [...newOptions];
                    options[i] = e.target.value;
                    setNewOptions(options);
                  }}
                />
              </div>
            ))}
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Doğru Cevap'
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </div>
            <button type='button' className='btn btn-primary' onClick={handleAddQuestion}>
              Soru Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
