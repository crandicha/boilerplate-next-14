'use client'

import React from 'react'

import { default as ErrorComponent } from 'components/Error'

export type TErrorProps = {
  error: Error
  reset: () => void
}

const ErrorPage = (props: TErrorProps) => {
  return <ErrorComponent {...props} />
}

export default ErrorPage
