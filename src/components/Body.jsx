import Todos from './Todos'
import Form from './Form'

const Body = ({data}) => {
  return (
    <div className='absolute top-40 min-w-fit shadow-lg min-h-[400px] left-1/2 transform -translate-x-1/2'>
      <h1 className='text-4xl font-bold py-4 bg-[#4553B1] w-[100%] flex justify-center text-white'>Todo List</h1>
      <Form />
      <div className='px-4'>
        {data && data.map((post) => (
          <Todos key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Body