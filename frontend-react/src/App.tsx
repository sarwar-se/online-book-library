import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBook/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <HomePage />
          </Route>

          <Route path='/search' exact>
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
