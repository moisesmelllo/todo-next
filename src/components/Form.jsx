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
    <form onSubmit={handleSubmit} className="px-4 mt-2 flex items-center justify-between">
      <label className="flex items-center space-x-2 mr-2">
        <input 
          type="text"
          name="todo"
          required
          placeholder="Add a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border-b outline-none border-black 
          sm:w-[400px] md:w-[600px] xl:w-[800px]"
        />
      </label>
      <button className="bg-[#4553B1] rounded-md py-1 px-2 text-white font-semibold">Cadastrar</button>
    </form>
  )
}

export default Form