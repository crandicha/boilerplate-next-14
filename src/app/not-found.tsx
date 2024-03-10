import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <section className="flex w-[500px] flex-col gap-4 rounded-md border border-gray-300 bg-white p-6 shadow-lg">
        <h1 className="text-center text-2xl">
          Oops! Seems like the page that you are looking for does not exist.
        </h1>
        <div className="flex justify-center">
          <Link href={'/'}>
            <button className="rounded-md bg-blue-600 px-4 py-3 text-white hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-800">
              Go to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
