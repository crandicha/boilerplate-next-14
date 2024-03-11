'use client'

import React, { useEffect } from 'react'

export type TErrorProps = {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: TErrorProps) => {
  const doContactSupport = () => {
    // add code for contact support here
  }

  const doPostLog = () => {
    // add code for posting logs here
  }

  const isProduction = process.env.NODE_ENV === 'production'

  useEffect(() => {
    doPostLog()
  }, [])
  return (
    <div className="flex h-full items-center justify-center">
      <section className="flex h-full rounded-md border border-gray-300 bg-white shadow-lg md:h-auto">
        <div className="flex w-screen flex-col justify-center gap-4 p-6 md:w-[800px]">
          <h1 className="text-center text-2xl">
            Oops! A client-side error has occurred.
          </h1>
          <p>Don&apos;t worry, you can:</p>
          <ul className="list-disc">
            <li>
              Try resetting the segment to its initial state by clicking{' '}
              <b>Reset</b> Button below
            </li>
            <li>Contact our support team for further assistance</li>
          </ul>
          <div className="flex w-full flex-row justify-center gap-4 md:w-auto">
            <button
              onClick={reset}
              className="flex-1 rounded-md bg-blue-600 px-4 py-3 text-white hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-800 md:flex-none"
            >
              Reset
            </button>
            <button
              onClick={doContactSupport}
              className="flex-1 rounded-md border border-black bg-white px-4 py-3 text-black hover:scale-105 hover:bg-gray-100 active:scale-95 active:bg-gray-200 md:flex-none"
            >
              Contact Support
            </button>
          </div>
          {!isProduction && (
            <div className="max-h-[350px] overflow-auto rounded-md bg-black p-4 text-white shadow-md">
              <pre>{error.message}</pre>
              <pre>{error.stack}</pre>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
