import {
  fireEvent, render, screen,
} from '@testing-library/react';
import React from 'react';
import { Counter } from './counter';

describe(Counter.name, () => {
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
});
