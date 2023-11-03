import { describe, it, expect } from "vitest"
import { render, screen } from '@testing-library/react'

import List from "../List"

describe('<List />', () => {
  it("should render a heading element level 1 with the text: 'Testing en React con Vitest'", () => {
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

  it('should render the default form', () => {
    render(<List />)

    const formElement = screen.getByRole('form')

    expect(formElement).toBeInTheDocument()
  })

  it("should render an input control with the label: 'Elemento a introducir'", () => {
    render(<List />)

    const inputElement = screen.getByRole('textbox', { name: /Elemento a introducir:/i })

    expect(inputElement).toBeInTheDocument()
  })

  it("should render a button to submit the form with the text: 'Añadir elemento a la lista'", () => {
    render(<List />)

    const buttonElement = screen.getByRole('button', { name: /Añadir elemento a la lista/i })

    expect(buttonElement).toBeInTheDocument()
  })
})