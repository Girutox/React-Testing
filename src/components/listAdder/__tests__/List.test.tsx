import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('should render a text of "No hay elementos en la lista" if loaded for the first time', () => {
    render(<List />)

    const textElement = screen.getByText(/No hay elementos en la lista/i)

    expect(textElement).toBeInTheDocument()
  })

  // it('should add a new item to the list when the form is submitted', async () => {
  //   render(<List />)

  //   const item = 'Dark Souls 5'
  //   const inputElement = screen.getByRole('textbox', { name: /Elemento a introducir:/i }) as HTMLInputElement
  //   const buttonElement = screen.getByRole('button', { name: /Añadir elemento a la lista/i }) as HTMLButtonElement

  //   inputElement.value = item

  //   fireEvent(buttonElement, new MouseEvent('click'))

  //   const itemElement = await screen.findByText(item)

  //   expect(itemElement).toBeInTheDocument()
  // })

  it('should add a new item to the list when the form is submitted', async () => {
    render(<List />)

    const item = 'Dark Souls 5'
    const inputElement = screen.getByRole('textbox', { name: /Elemento a introducir:/i }) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Añadir elemento a la lista/i }) as HTMLButtonElement

    inputElement.value = item

    await userEvent.click(buttonElement)

    const itemElement = screen.getByText(item)

    expect(itemElement).toBeInTheDocument()
  })

  it('should delete the item when the proper button has been clicked', async () => {
    render(<List />)

    const item = 'Dark Souls 5'
    const inputElement = screen.getByRole('textbox', { name: /Elemento a introducir:/i }) as HTMLInputElement
    const buttonElement = screen.getByRole('button', { name: /Añadir elemento a la lista/i }) as HTMLButtonElement

    inputElement.value = item
    await userEvent.click(buttonElement)

    const emptyTextElement1 = screen.queryByText(/No hay elementos en la lista/i)
    expect(emptyTextElement1).not.toBeInTheDocument()

    const deleteButtonElement = screen.getByRole('button', { name: /X/i })
    await userEvent.click(deleteButtonElement)

    const emptyTextElement2 = screen.getByText(/No hay elementos en la lista/i)
    expect(emptyTextElement2).toBeInTheDocument()
  })
})