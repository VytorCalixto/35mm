import React from 'react';
import ReactDOM from 'react-dom';
import Movies from '../components/movies/Movies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
