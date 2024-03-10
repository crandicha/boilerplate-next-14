import React, { useEffect } from 'react'

export type TErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: TErrorProps) => {
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
      <section className="flex w-[800px] flex-col gap-4 rounded-md border border-gray-300 bg-white p-6 shadow-lg">
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
        <div className="flex flex-row justify-center gap-2">
          <button
            onClick={reset}
            className="rounded-md bg-blue-600 px-4 py-3 text-white hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-800"
          >
            Reset
          </button>
          <button
            onClick={doContactSupport}
            className="rounded-md border border-black bg-white px-4 py-3 text-black hover:scale-105 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
          >
            Contact Support
          </button>
        </div>
        {!isProduction && (
          <div className="rounded-md bg-black p-4 text-white shadow-md">
            <pre>{error.message}</pre>
            <pre className="max-h-[350px] overflow-auto">{error.stack}</pre>
          </div>
        )}
      </section>
    </div>
  )
}

export default Error
