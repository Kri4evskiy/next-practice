import { NextResponse } from 'next/server'
import { mock_data } from '../mock-data'

export async function GET(request: Request) {
	return NextResponse.json(mock_data)
}
