import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <section className="flex h-full w-full flex-col justify-center gap-4 rounded-md border border-gray-300 bg-white p-6 shadow-lg md:h-auto md:w-[500px]">
        <h1 className="text-center text-2xl">
          Oops! Seems like the page that you are looking for does not exist.
        </h1>
        <div className="flex justify-center">
          <Link href={'/'} className="flex w-full justify-center">
            <button className="w-full rounded-md bg-blue-600 px-4 py-3 text-white hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-800 md:w-auto">
              Back to Homepage
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
