import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createMiddleware } from 'next-easy-middlewares'

const middlewares = {
  '/': async (req: NextRequest) => {
    console.log(`middleware for ${req.url} triggered`)
    NextResponse.next()
  },
}

export const middleware = createMiddleware(middlewares)

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
