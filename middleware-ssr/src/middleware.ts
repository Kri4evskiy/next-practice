import { type NextRequest, NextResponse } from 'next/server'
import { Environment } from './config'

export function middleware(request: NextRequest) {
	const isLogin = request.cookies.get('login')

	if (!isLogin || isLogin.value !== 'true') {
		return NextResponse.redirect(`${Environment.LocalhostUrl}/login`)
	}
	return NextResponse.next()
}

export const config = {
	matcher: '/products'
}
