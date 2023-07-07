import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from './store'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import FinalPath from './features/finalPath/finalPath';
import pathReducer from './features/finalPath/pathSlice'

test('renders the link ot the first question', () => {
  render(<App />);
  const linkElement = screen.getByText('first question');
  expect(linkElement).toHaveProperty('href', 'http://localhost/questions/1');
});

test('renders the first question when clicking link', () => {
  render(<Provider store={store}><App /></Provider>);
  fireEvent.click(screen.getByText('first question'));

  expect(screen.getByText('Question 1')).toBeInTheDocument();
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
  expect(screen.getByText('Option 3')).toBeInTheDocument();
});

test('renders final Path', () => {
  const preloadedState = {
    path: [
      {questionId: 1, optionId: 2},
      {questionId: 3, optionId: 1},
    ]
  }
  const customStore = configureStore({ reducer: { path: pathReducer }, preloadedState})
  render(<Provider store={customStore}><BrowserRouter><FinalPath /></ BrowserRouter></Provider>);

  expect(screen.getByText(/This is the path you have taken/)).toBeInTheDocument();
  expect(screen.getByText('Question 1')).toBeInTheDocument();
  expect(screen.getByText(/Option 2/)).toBeInTheDocument();
  expect(screen.getByText('Question 3')).toBeInTheDocument();
  expect(screen.getByText(/Option 1/)).toBeInTheDocument();
});