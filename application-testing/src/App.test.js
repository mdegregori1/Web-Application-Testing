import React from 'react';
import App from './App';
import { render } from '@testing-library/react';


test('renders properly', ()=>{
    render (<App/>)
})


test('Strike is found', () => {
    const { getAllByText } = render(<App />);

    getAllByText(/strike/i);
})

test('Ball is found', () => {
    const { getAllByText } = render(<App />);

    getAllByText(/ball/i);
})

test('Foul is found', () => {
    const { getAllByText } = render(<App />);

    getAllByText(/foul/i);
})

test('Hit is found', () => {
    const { getAllByText } = render(<App />);

    getAllByText(/hit/i);
})
