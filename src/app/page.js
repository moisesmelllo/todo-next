'use client'

import { useQuery } from 'react-query'
import Header from "@/components/Header";
import Body from "@/components/Body";
import axios from 'axios';

export default function Home() {
  const { data, isFetching, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const {data } = await axios.get('http://localhost:8000/posts')

      return data
    }
  });
  
  console.log(data);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
      <main className="relative w-screen">
        <Header />
        <Body data={data}/>     
      </main>
  )
}
