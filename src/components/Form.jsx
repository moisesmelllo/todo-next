import { generateRandomId } from "@/libs/utils";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const Form = () => {
  const [todo, setTodo] = useState('');
  let randomId = generateRandomId(8); // GERA UM ID ALEATORIO DE 8 DIGITOS
  const inputRef = useRef(null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async () =>
      await axios.post('http://localhost:8000/posts', {
        id: randomId,
        todo: todo
      }),
    {
      onSuccess: () => {
        setTodo('');
        queryClient.invalidateQueries(['todos'])
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(); // Chame mutate aqui após a definição da constante 'mutate'
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Coloca o foco no input após a atualização da página
    }
  }, []);

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
          ref={inputRef}
          className="border-b outline-none border-black 
          sm:w-[400px] md:w-[600px] xl:w-[800px]"
        />
      </label>
      <button className="bg-[#4553B1] rounded-md py-1 px-2 text-white font-semibold">Cadastrar</button>
    </form>
  );
};

export default Form;
