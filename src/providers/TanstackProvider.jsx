'use client'

import { QueryClientProvider, QueryClient } from "react-query"
import { useState } from "react"

const TankstackProvider = ({children}) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TankstackProvider