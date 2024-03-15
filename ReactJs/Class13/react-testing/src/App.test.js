import { render, screen } from '@testing-library/react';
import App from './App';
import { sum } from './util/random';
import Counter from './components/Counter';

// name/title to your test case
// Execute / render your intent
// [optional] fireEvent
// Get value / read the value
// check expectations - assertion

// Pure Function
test('sum function to test 2 numbers', () => {
  const result = sum(1,2);
  expect(result).toBe(3);
});

test('sum function to test 3 numbers', () => {
  const result = sum(1, 2, 3);
  expect(result).toBe(6);
});


// UI Component

test('check if learn react is render' , () => {
    render(<App />);
    const textValue = screen.getByText('Learn React');
    expect(textValue).toBeInTheDocument();
})







// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
