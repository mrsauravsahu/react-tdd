import {
  fireEvent, render, screen,
} from '@testing-library/react';
import React from 'react';
import { getNumber } from '../../utils/randomize';
import { Counter } from './counter';

jest.mock('../../utils/randomize');

describe(Counter.name, () => {
  beforeEach(() => {
    getNumber.mockReturnValue(0);
  });

  test('should match snapshot', () => {
    const { container } = render(<Counter />);

    expect(container).toMatchSnapshot();
  });

  test('should display the current count', () => {
    render(<Counter />);

    screen.getByText('Current count is 0');
  });

  test('should display an increment button', () => {
    render(<Counter />);

    const incrementElement = screen.getByText('Increment Counter');
    expect(incrementElement.tagName).toBe('BUTTON');
  });

  test('should update the message when increment button is clicked', () => {
    render(<Counter />);

    const incrementElement = screen.getByText('Increment Counter');
    fireEvent.click(incrementElement);

    screen.getByText('Current count is 1');
  });

  test('should set the initial value from randomize', () => {
    getNumber.mockReturnValue(45);

    render(<Counter />);

    expect(getNumber).toHaveBeenCalledTimes(1);
    screen.getByText('Current count is 45');
  });
});
