import React from 'react';
import ReactDOM from 'react-dom';
import GridMovies from '../src/components/GridMovies';

describe('1 - Verifica a existência do componente GridMovies', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridMovies />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});