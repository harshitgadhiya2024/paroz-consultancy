import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the token preview content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /Paroz Consultancy design tokens are wired and responsive/i
      })
    ).toBeInTheDocument();

    expect(screen.getByText('#1a365d')).toBeInTheDocument();
    expect(screen.getByText('#2d8a6e')).toBeInTheDocument();
    expect(screen.getByText('320px')).toBeInTheDocument();
    expect(screen.getByText('768px')).toBeInTheDocument();
    expect(screen.getByText('1200px')).toBeInTheDocument();
    expect(screen.getByText('2560px')).toBeInTheDocument();
    expect(screen.getByText(/48px mobile \/ 80px desktop/i)).toBeInTheDocument();
    expect(screen.getByText(/max width utility:/i)).toBeInTheDocument();
    expect(screen.getByText(/max-w-content/i)).toBeInTheDocument();
  });
});
