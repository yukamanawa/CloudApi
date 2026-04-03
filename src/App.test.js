// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CloudApiBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CloudApiBridge/i);
    expect(titleElement).toBeInTheDocument();
});
