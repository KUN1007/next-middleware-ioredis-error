import { NextResponse } from 'next/server'
import { setKv } from './lib/redis'
import type { NextRequest } from 'next/server'

export const kunAuthMiddleware = async (request: NextRequest) => {
  setKv('kun', 'kun')
  return NextResponse.next()
}
