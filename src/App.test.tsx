import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the frontend foundation message', () => {
    render(<App />)

    expect(screen.getByText(/frontend foundation is in place/i)).toBeInTheDocument()
    expect(screen.getByText(/resource handling & staffing/i)).toBeInTheDocument()
  })
})
