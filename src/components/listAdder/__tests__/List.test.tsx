import { describe, it, expect } from "vitest"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import List from "../List"

describe('test headings', () => {
  it.skip("should render a heading element level 1 with the text: 'Testing en React con Vitest'", () => {
    // Arrange
    render(<List />)
  
    // Act
    // const element = screen.getByText(/Testing en React con Vitest/i)
    const element = screen.getByRole('heading', { level: 1, name: /Testing en React con Vitest/i })
  
    // Assert
    expect(element).toBeInTheDocument()
  })

  it("should render a heading element level 2 with the text: 'Añadir y eliminar elementos de una lista'", () => {
    // Arrange
    render(<List />)
  
    // Act
    const element = screen.getByRole('heading', { level: 2, name: /Añadir y eliminar elementos de una lista/i })
  
    // Assert
    expect(element).toBeInTheDocument()
  })
})