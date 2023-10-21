'use client'

import { useFetch } from "@/hooks/useFetcher"
import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  const {data, isFetching, error} = useFetch('http://localhost:8000/posts')


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
