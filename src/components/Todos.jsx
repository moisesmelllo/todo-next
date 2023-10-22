import axios from "axios"
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const Todos = ({post}) => {
  const [editingTodo, setEditingTodo] = useState(null)
  const [updatedTodo, setUpdatedTodo] = useState(post.todo)
  const queryClient = useQueryClient();

  const handleEdit = (id) => {
    setEditingTodo(id)
  }

  const {mutate: handleDelete} = useMutation({
    mutationFn: async() => await axios.delete(`http://localhost:8000/posts/${post.id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const {mutate} = useMutation({
    mutationFn: async() => await axios.put(`http://localhost:8000/posts/${post.id}`, {
        todo: updatedTodo
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
    onError: (err) => {
      console.log(err);
    }
  })

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (updatedTodo.length < 1) {
      return
    }

    mutate();
  }

  return (
    <>
      {editingTodo && editingTodo === post.id ? (
        <div>
          <form className="py-1 my-4 flex justify-between items-center space-x-4 border-b border-black" onSubmit={(e) => handleUpdate(e, post.id)}>
            <input
              type="text"
              value={updatedTodo}
              onChange={(e) => setUpdatedTodo(e.target.value)}
              className="outline-none w-full"
            />
            <button
              type="submit"
              className="bg-green-300 w-24 h-8 rounded-full"
            >
                Atualizar
            </button>
          </form>
        </div>
      ) : (
        <div className="py-1 my-4 flex justify-between items-center space-x-4 border-b border-black">
            <div>{post.todo}</div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(post.id)} className="bg-green-300 w-8 h-8 rounded-full">Edit</button>
              <button onClick={() => handleDelete()} className="bg-green-300 w-8 h-8 rounded-full">ok</button>
            </div>
        </div>
        )}
      </>
  )
}

export default Todos