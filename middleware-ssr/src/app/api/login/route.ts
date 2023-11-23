import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
	const data = await request.json()

	cookies().set('login', 'true')

	return NextResponse.json(data)
}
