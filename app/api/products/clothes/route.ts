import { NextRequest, NextResponse } from 'next/server'
import clothes from '@/data/clothes.json'

export async function GET(req: NextRequest) {
  return NextResponse.json(clothes)
}