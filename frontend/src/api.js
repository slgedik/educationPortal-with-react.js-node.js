import axios from 'axios';
const baseURL = 'http://localhost:5000/api';

const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${baseURL}/questions`);
    let questions = response.data;

    // Eğer 24'den fazla soru varsa rastgele 24 soruyu seç
    if (questions.length > 24) {
      const randomIndices = Array.from({ length: 24 }, () => Math.floor(Math.random() * questions.length));
      questions = randomIndices.map((index) => questions[index]);
    }

    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

const addQuestion = async (questionData) => {
  try {
    await axios.post(`${baseURL}/questions/add`, questionData);
    console.log('Soru başarıyla eklendi:', questionData);
  } catch (error) {
    console.error('Soruyu eklerken hata oluştu:', error);
  }
};

export { fetchQuestions, addQuestion };
