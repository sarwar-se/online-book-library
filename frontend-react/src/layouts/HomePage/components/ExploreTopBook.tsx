import React from 'react';
import { Link } from 'react-router-dom';

export const ExploreTopBook = () => {
  return (
    <div className='p-5 mb-4 bg-dark top-book-header'>
      <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
        <div>
          <h1 className='display-5 fw-bold'>Find your next advanture</h1>
          <p className='col-md-8 fs-4'>Where would you like to go next?</p>
          <Link className='btn main-color btn-lg text-white' to='/search'>
            Explore top books
          </Link>
        </div>
      </div>
    </div>
  );
};
