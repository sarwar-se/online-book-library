import React from 'react';
import { ExploreTopBook } from './components/ExploreTopBook';
import { Carousel } from './components/Carousel';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';

export const HomePage = () => {
  return (
    <>
      <ExploreTopBook />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
