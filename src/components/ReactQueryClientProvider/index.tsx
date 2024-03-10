'use client'

import type { HTMLProps } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const ReactQueryClientProvider = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryClientProvider
