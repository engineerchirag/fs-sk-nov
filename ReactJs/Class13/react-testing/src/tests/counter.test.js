import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';


test('check if counter is rendered' , () => {
    render(<Counter />);
    const textValue = screen.getByText("0");
    expect(textValue).toBeInTheDocument();
  })

  test('check if counter increased after clicking on +' , async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText('+'));
    const textValue = screen.getByText("1");
    expect(textValue).toBeInTheDocument();
  })

  test('check if counter increased after clicking on -' , async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText('-'));
    const textValue = screen.getByText("-1");
    expect(textValue).toBeInTheDocument();
  })
  