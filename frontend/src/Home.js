import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='page-container'>
      <div className='home-container'>
        <h1>Eğitim Portalına Hoş Geldiniz !</h1>
        <Link to='/add-question'>
          <div className='mb-2 mt-4'>
            <button className='btn btn-outline-info '>Soru Ekle</button>
          </div>
        </Link>
        <Link to='/quiz'>
          <div className='mb-2'>
            <button className='btn btn-outline-info '>Teste Başla</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
