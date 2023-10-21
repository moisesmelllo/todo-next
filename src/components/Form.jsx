'use client'

import { generateRandomId } from "@/libs/utils"

import axios from "axios"
import { useState, useEffect } from "react"

const Form = () => {
  const [todo, setTodo] = useState('')
  let randomId = generateRandomId(8)

  async function handleSubmit(e) {
    e.preventDefault()

    await axios.post('http://localhost:8000/posts', {
      id: randomId,
      todo: todo
    })

    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit} className="px-4">
      <label>
        <span>Todo: </span>
        <input 
          type="text" 
          name="todo"
          required
          placeholder="Add a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
    </form>
  )
}

export default Form