import { useState } from "react"
import { Item } from "./Item"

export type ItemId = `${string}-${string}-${string}-${string}-${string}`
export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

const List = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Testing en React con Vitest</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
          <label>
            Elemento a introducir:
            <input
              name="item"
              required
              type="text"
              placeholder="Videojuegos 🎮"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {
          items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista.</strong>
            </p>
          ) : (
            <ul>
              {
                items.map((item) => {
                  return (
                    <Item
                      {...item}
                      handleClick={createHandleRemoveItem(item.id)}
                      key={item.id} />
                  )
                })
              }
            </ul>
          )
        }
      </section>
    </main>
  )
}

export default List