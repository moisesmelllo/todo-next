'use client'

import { useFetch } from "@/useFetcher"
import { Suspense } from "react"

export default function Home() {
  const {data, isFetching, error} = useFetch('http://localhost:8000/posts')


  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
      <main>
        <h1>Todo List</h1>
        {data && data.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </main>
  )
}
