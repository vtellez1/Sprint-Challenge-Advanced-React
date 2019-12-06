import React from 'react';
import ReactDOM from 'react-dom';

import '@testing-library/jest-dom/extend-expect';
import { render} from '@testing-library/react'
import * as rt1 from '@testing-library/react'

import App from './App';
import PlayersCard from "./components/PlayersCard";
import NavBar from "./components/NavBar";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Display players', () => {
  const container = render(<App/>);
  container.getByText(/players/i);
});

test("Renders Welcome", () => {
  const {getByTestId} = rt1.render(<NavBar />);
  getByTestId(/welcome/i)
});

test('Renders players name', () => {
  const {getByTestId} = rt1.render(<PlayersCard />);
  getByTestId(/name/i)
});


